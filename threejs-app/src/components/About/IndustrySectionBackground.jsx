import { useEffect, useRef } from "react";
import * as THREE from "three";

const SQUARE_COUNT = 80;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function IndustrySectionBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000814, 1);
    mount.appendChild(renderer.domElement);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
    camera.position.z = 30;

    // --- Glow Background ---
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 512;
    glowCanvas.height = 512;
    const ctx = glowCanvas.getContext("2d");

    const grad = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    grad.addColorStop(0, "rgba(0,120,255,0.55)");
    grad.addColorStop(0.4, "rgba(0,60,160,0.2)");
    grad.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const glow = new THREE.Sprite(glowMat);
    glow.scale.set(80, 45, 1);
    glow.position.set(0, 0, -5);
    scene.add(glow);

    // --- Squares ---
    const squares = [];

    const colors = [
      "rgb(0,160,255)",
      "rgb(0,200,255)",
      "rgb(80,180,255)",
      "rgb(0,100,220)",
      "rgb(100,220,255)",
    ];

    for (let i = 0; i < SQUARE_COUNT; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const c = canvas.getContext("2d");

      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = randomBetween(18, 40);

      const angle = randomBetween(-Math.PI / 6, Math.PI / 6) + Math.PI / 4;

      c.save();
      c.translate(32, 32);
      c.rotate(angle);
      c.translate(-32, -32);

      const g = c.createRadialGradient(32, 32, 2, 32, 32, 30);
      g.addColorStop(0, color.replace("rgb", "rgba").replace(")", ",0.5)"));
      g.addColorStop(1, color.replace("rgb", "rgba").replace(")", ",0)"));

      c.fillStyle = g;
      c.fillRect(0, 0, 64, 64);

      const half = size / 2;
      c.fillStyle = color;
      c.fillRect(32 - half, 32 - half, size, size);

      c.restore();

      const texture = new THREE.CanvasTexture(canvas);

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(material);

      const scale = randomBetween(0.5, 2.2);
      sprite.scale.set(scale, scale, 1);

      sprite.position.set(
        randomBetween(-28, 28),
        randomBetween(-16, 16),
        randomBetween(-10, 5)
      );

      scene.add(sprite);

      squares.push({
        sprite,
        vx: randomBetween(-0.008, 0.008),
        vy: randomBetween(-0.004, 0.004),
        pulseSpeed: randomBetween(0.3, 1.2),
        pulseOffset: randomBetween(0, Math.PI * 2),
        baseScale: scale,
      });
    }

    // --- Animation ---
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      squares.forEach((sq) => {
        const { sprite, vx, vy, pulseSpeed, pulseOffset, baseScale } = sq;

        sprite.position.x += vx;
        sprite.position.y += vy;

        if (sprite.position.x > 30) sprite.position.x = -30;
        if (sprite.position.x < -30) sprite.position.x = 30;

        if (sprite.position.y > 18) sprite.position.y = -18;
        if (sprite.position.y < -18) sprite.position.y = 18;

        const pulse = 1 + 0.12 * Math.sin(t * pulseSpeed + pulseOffset);
        sprite.scale.setScalar(baseScale * pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize ---
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}