import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebGLPixelEffect = ({ imageUrl }) => {
  const containerRef = useRef();

  useEffect(() => {
    let camera, scene, renderer, material, mesh;
    let width, height;

    const init = () => {
      const container = containerRef.current;
      width = container.clientWidth;
      height = container.clientHeight;

      scene = new THREE.Scene();

      camera = new THREE.OrthographicCamera(
        width / -2, width / 2, height / 2, height / -2, 1, 1000
      );
      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(1, 1);

      const uniforms = {
        uTexture: { value: null },
        uUVRate: { value: new THREE.Vector2(1, 1) },
        uProgress: { value: 1.0 },
        uTime: { value: 0 },
        uVelocity: { value: 0 },
      };

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageUrl, (tex) => {
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        uniforms.uTexture.value = tex;
        updateAspect(tex);
        renderer.render(scene, camera);
      });

      const updateAspect = (tex) => {
        if (!tex || !tex.image) return;
        const imageAspect = tex.image.width / tex.image.height;
        const containerAspect = width / height;
        if (containerAspect > imageAspect) {
          uniforms.uUVRate.value.set(1, imageAspect / containerAspect);
        } else {
          uniforms.uUVRate.value.set(containerAspect / imageAspect, 1);
        }
      };

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uUVRate;
        uniform float uProgress;
        uniform float uTime;
        uniform float uVelocity;
        varying vec2 vUv;

        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = (vUv - 0.5) * uUVRate + 0.5;
          float p = uProgress;
          
          // PREMIUM: Dynamic pixel density based on progress
          float pixelCount = mix(500.0, 50.0, pow(p, 0.4));
          vec2 gridUv = floor(uv * pixelCount) / pixelCount;
          
          float n = hash(gridUv);
          
          // PARALLAX: Pixels float based on scroll velocity and individual noise
          // This creates a "scattered" feeling when scrolling fast
          float velocityEffect = uVelocity * 0.0005 * (n - 0.5);
          float organicMove = p * 0.1 * (n - 0.5);
          
          vec2 finalUv = mix(uv, gridUv + velocityEffect + organicMove, smoothstep(0.01, 0.2, p));
          finalUv = clamp(finalUv, 0.0, 1.0);
          
          vec4 color = texture2D(uTexture, finalUv);
          
          // Cinematic Grain
          float grain = (hash(vUv + uTime) - 0.5) * 0.03;
          color.rgb += grain;

          // Smooth reveal logic
          float alpha = 1.0;
          if(p > 0.8) {
            float dissolve = hash(gridUv * 10.0 + floor(uTime * 10.0));
            alpha = smoothstep(1.0, 0.7, p + (dissolve - 0.5) * 0.3);
          }

          gl_FragColor = vec4(color.rgb, color.a * alpha);
        }
      `;

      material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
      });

      mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(width, height, 1);
      scene.add(mesh);

      // SUBTLE RESOLVE: Toned down for a "small" animation feel
      gsap.fromTo(uniforms.uProgress, 
        { value: 0.5 }, // Start only half pixelated for subtlety
        {
          value: 0.0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 95%", 
            end: "top 40%", // Resolves much faster
            scrub: 0.8, // More immediate reaction
            onUpdate: (self) => {
              gsap.to(uniforms.uVelocity, {
                value: self.getVelocity(),
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }
      });

      let frameId;
      const animate = (time) => {
        frameId = requestAnimationFrame(animate);
        uniforms.uTime.value = time * 0.001;
        renderer.render(scene, camera);
      };
      animate(0);

      const handleResize = () => {
        if (!containerRef.current) return;
        const c = containerRef.current;
        width = c.clientWidth;
        height = c.clientHeight;
        camera.left = width / -2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = height / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        mesh.scale.set(width, height, 1);
        if (uniforms.uTexture.value) updateAspect(uniforms.uTexture.value);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(frameId);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        scene.clear();
        if(container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
        }
        ScrollTrigger.getAll().forEach(t => {
            if (t.trigger === container) t.kill();
        });
      };
    };

    const cleanup = init();
    return cleanup;
  }, [imageUrl]);

  return (
    <div 
        ref={containerRef} 
        className="w-full h-full min-h-[350px] flex items-center justify-center relative select-none bg-[#051120]"
    />
  );
};

export default WebGLPixelEffect;
