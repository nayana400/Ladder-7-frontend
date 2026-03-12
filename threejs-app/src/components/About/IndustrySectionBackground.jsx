import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function IndustrySectionBackground() {
    const mountRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(
            -1, 1, 1, -1, 0, 1
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // Use container dimensions
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        renderer.setSize(width, height);

        mountRef.current.appendChild(renderer.domElement);

        const uniforms = {
            iTime: { value: 0 },
            iResolution: {
                value: new THREE.Vector2(width, height),
            },
            iMouse: { value: new THREE.Vector2(0, 0) },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            fragmentShader: `
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 iMouse;


      vec3 bgColor = vec3(0.01, 0.05, 0.15);
      vec3 rectColor = vec3(0.1, 0.5, 1.0);


      const float noiseIntensity = 2.8;
      const float noiseDefinition = 0.6;
      const vec2 glowPos = vec2(-2., 0.);

      const float total = 30.;

      const float minSize = 0.03;
      const float maxSize = 0.08-minSize;
      const float yDistribution = 0.5;

      float random(vec2 co){
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      float noise(vec2 p){
          p*=noiseIntensity;
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(random(i), random(i+vec2(1,0)), u.x),
                     mix(random(i+vec2(0,1)), random(i+vec2(1,1)), u.x), u.y);
      }

      float fbm(vec2 uv){
          uv *= 5.0;
          mat2 m = mat2(1.6,1.2,-1.2,1.6);
          float f  = 0.5*noise(uv); uv=m*uv;
          f += 0.25*noise(uv); uv=m*uv;
          f += 0.125*noise(uv); uv=m*uv;
          f += 0.0625*noise(uv);
          return 0.5 + 0.5*f;
      }

      vec3 bg(vec2 uv){
          float velocity = iTime/1.6;
          float intensity = sin(uv.x*3.+velocity*2.)*1.1+1.5;
          uv.y -= 2.;
          vec2 bp = uv+glowPos;
          uv *= noiseDefinition;

          float rb = fbm(vec2(uv.x*.5-velocity*.03, uv.y))*.1;
          uv += rb;

          float rz = fbm(uv*.9+vec2(velocity*.35, 0.0));
          rz *= dot(bp*intensity,bp)+1.2;

          vec3 col = bgColor/(.1-rz);
          return sqrt(abs(col));
      }

      float rectangle(vec2 uv, vec2 pos, float width, float height, float blur){
          pos = (vec2(width,height)+.01)/2. - abs(uv-pos);
          pos = smoothstep(0.,blur,pos);
          return pos.x*pos.y;
      }

      mat2 rotate2d(float a){
          return mat2(cos(a),-sin(a),sin(a),cos(a));
      }

      void main(){
          vec2 uv = gl_FragCoord.xy / iResolution.xy * 2. - 1.;
          uv.x *= iResolution.x/iResolution.y;

          vec3 color = bg(uv)*(2.-abs(uv.y*2.));

          float velX = -iTime/8.;
          float velY = iTime/10.;

          for(float i=0.; i<total; i++){
              float index = i/total;
              float rnd = random(vec2(index));

              vec3 pos = vec3(0.);
              pos.x = fract(velX*rnd+index)*4.-2.0;
              pos.y = sin(index*rnd*1000.+velY) * yDistribution;
              pos.z = maxSize*rnd+minSize;


              vec2 uvRot = uv - pos.xy + pos.z/2.;
              uvRot = rotate2d(i+iTime/2.) * uvRot;
              uvRot += pos.xy+pos.z/2.;

              float rect = rectangle(uvRot,pos.xy,pos.z,pos.z,(maxSize+minSize-pos.z)/2.);
              color += rectColor * rect * pos.z/maxSize;
          }

          float alpha = clamp(length(color) * 0.8, 0.0, 1.0);
          gl_FragColor = vec4(color, alpha);
      }
      `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });


        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const clock = new THREE.Clock();
        let animationId;

        const animate = () => {
            uniforms.iTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };

        animate();

        // GSAP Floating Animation
        import("gsap").then(({ gsap }) => {
            gsap.to(containerRef.current, {
                y: "2%",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });




        const handleResize = () => {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;
            renderer.setSize(w, h);
            uniforms.iResolution.value.set(w, h);
        };

        const onMouseMove = (e) => {
            uniforms.iMouse.value.set(e.clientX, e.clientY);

            // Additional subtle mouse-based parallax for the container
            import("gsap").then(({ gsap }) => {
                gsap.to(containerRef.current, {
                    x: (e.clientX / window.innerWidth - 0.5) * 30,
                    y: (e.clientY / window.innerHeight - 0.5) * 30,
                    duration: 2,
                    ease: "power2.out",
                });
            });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", onMouseMove);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden opacity-70">
            <div ref={mountRef} className="w-full h-full"></div>
        </div>
    );
}

