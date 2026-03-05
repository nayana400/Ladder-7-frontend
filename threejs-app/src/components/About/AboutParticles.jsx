import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AboutParticles() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.appendChild(renderer.domElement);

        const uniforms = {
            iTime: { value: 0 },
            iResolution: {
                value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            fragmentShader: `
      uniform float iTime;
      uniform vec2 iResolution;
      const float PI = 3.14159265359;
      mat2 rotate(float r){
        return mat2(cos(r), sin(r), -sin(r), cos(r));
      }
      vec2 hash21(float p){
        vec3 p3 = fract(vec3(p) * vec3(.1031,.1030,.0973));
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.xx+p3.yz)*p3.zy);
      }
      vec3 hash32(vec2 p){
        vec3 p3 = fract(vec3(p.xyx) * vec3(.1031,.1030,.0973));
        p3 += dot(p3, p3.yxz+33.33);
        return fract((p3.xxy+p3.yzz)*p3.zyx);
      }
      vec3 layer(float zoom){
        vec2 h21 = hash21(zoom);
        float t = iTime;
        vec2 uv = zoom*(2.0*gl_FragCoord.xy-iResolution.xy)/iResolution.y;
        uv.x -= t + h21.x*999.;
        vec2 s = vec2(2.);
        vec2 id = round(uv/s);
        vec3 h32 = hash32(id);
        if(h32.x >= 0.7){
            vec2 phase = h32.yz*100.+t+h21*100.;
            vec2 tv = uv + vec2(cos(phase.x),sin(phase.y))*.5;
            id = round(tv/s);
            vec2 p = tv - s*id;
            float presence = sin(id.x+t*2.)*.5+.5;
            float r = .4 + h21.y*.2-.1;
            float r2 = r * (.6 + .2);
            float m = smoothstep(r,r2,length(p));
            vec3 col = vec3(0.0);
            if(h32.y < 0.2){
                col = vec3(3.,229.,243.)/255.;
            }
            else if(h32.y < 0.7){
                col = vec3(35.,125.,195.)/255.;
            }
            else{
                col = vec3(0.,79.,83.)/255.;
            }
            return col*m*presence;
        }
        return vec3(0.);
      }
      float line(float offset){
        float t = iTime;
        vec2 uv = (2.*gl_FragCoord.xy-iResolution.xy)/iResolution.y;
        uv *= rotate(-PI*.2);
        uv.y += sin(uv.x*2.+t*.05)*.1;
        uv.y += sin((uv.x*.5 + offset)*.9 + t*.1)*.3;
        return .02/(abs(uv.y)+5.*smoothstep(0.,30.,abs(uv.x)));
      }
      vec3 background_color(){
        float t = iTime*.5;
        vec3 col = vec3(0.);
        vec2 uv = (2.*gl_FragCoord.xy-iResolution.xy)/iResolution.y;
        uv *= rotate(PI*.25);
        uv.y *= .5;
        vec3 GREEN = vec3(0.,79.,83.)/255.;
        vec3 BLUE = vec3(35.,125.,195.)/255.;
        col += mix(GREEN, vec3(0.), sin(uv.y + t)*.5+.5);
        col += mix(BLUE*.5, vec3(0.), sin(uv.y + t + PI)*.5+.5);
        return col*.5;
      }
      void main(){
        vec3 col = background_color();
        float zoom = 2.;
        for(int i=0;i<5;i++){
          col += layer(zoom);
          zoom *= 2.;
        }
        for(int i=0;i<8;i++){
          col += line(PI*(2./8.)*float(i));
        }
        gl_FragColor = vec4(col,1.0);
      }
      `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationId;
        const animate = () => {
            uniforms.iTime.value += 0.01;
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="w-full h-full">
            <div ref={mountRef} className="w-full h-full" />
        </div>
    );
}
