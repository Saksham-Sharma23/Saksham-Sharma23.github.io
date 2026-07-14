import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene: any, camera: any, renderer: any, particles: any, material: any;
    let mouseX = 0, mouseY = 0;
    let frameId = 0;

    const isLightTheme = () => !document.documentElement.classList.contains('dark');

    const applyThemeColor = () => {
      if (!material) return;
      const light = isLightTheme();
      material.color.setHex(light ? 0xe8590c : 0xffb347);
      material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      material.opacity = light ? 0.85 : 0.7;
      material.size = light ? 2.2 : 1.6;
      material.needsUpdate = true;
    };

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
      camera.position.z = 300;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const particleCount = 10000;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 1500;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const light = isLightTheme();
      material = new THREE.PointsMaterial({
        size: light ? 2.2 : 1.6,
        color: light ? 0xe8590c : 0xffb347,
        blending: light ? THREE.NormalBlending : THREE.AdditiveBlending,
        transparent: true,
        opacity: light ? 0.85 : 0.7,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    };

    // Static field: no time-based auto-spin. Only a subtle, damped parallax
    // that eases the camera toward the cursor so it feels alive but calm.
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Responsive parallax: the camera follows the cursor strongly (as in the
      // original), so the field feels interactive. No constant time-based spin.
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    init();
    animate();

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onDocumentMouseMove);

    const themeObserver = new MutationObserver(applyThemeColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      themeObserver.disconnect();
      if (renderer && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer?.dispose?.();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};

export default ParticleBackground;
