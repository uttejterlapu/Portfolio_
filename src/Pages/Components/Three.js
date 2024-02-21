import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

const ThreeDemo = () => {
  const containerRef = useRef(null);
  let camera, scene, renderer, controls;

  useEffect(() => {
    init();
    obj();

    function obj() {
      let geometries = [];
      // obj
      let geometry = new THREE.TorusGeometry(1, 0.4, 16, 50);

      geometries.push(geometry);
      let g = geometry.clone();
      g.rotateY(Math.PI / 2);
      g.translate(0, 1.3, 0);
      geometries.push(g);
      geometry = BufferGeometryUtils.mergeGeometries(geometries);
      geometry.center();

      let material = new THREE.MeshNormalMaterial({});
      let mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // particle
      let particles;
      const radius = 50;
      const particle_num = 500;
      let vertex = new THREE.Vector3();
      let random_ratio;
      geometries = [];
      for (let i = 0; i < particle_num; i++) {
        const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
        const phi = THREE.MathUtils.randFloatSpread(360);
        // outside
        vertex.x = radius * Math.sin(theta) * Math.cos(phi);
        vertex.y = radius * Math.sin(theta) * Math.sin(phi);
        vertex.z = radius * Math.cos(theta);
        // inside
        random_ratio = Math.sqrt(Math.sqrt(Math.random()));
        vertex.copy(vertex).multiplyScalar(random_ratio);
        //
        let g = geometry.clone();
        g.rotateX(Math.random() * Math.PI * 2);
        g.rotateY(Math.random() * Math.PI * 2);
        g.rotateZ(Math.random() * Math.PI * 2);
        g.translate(vertex.x, vertex.y, vertex.z);
        geometries.push(g);
      }
      geometry = BufferGeometryUtils.mergeGeometries(geometries);
      geometry.attributes.position.needsUpdate = true;
      geometry.computeBoundingBox();
      geometry.computeVertexNormals();
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }

    function init() {
      scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 500);
      camera.position.set(0, 0, 100);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.maxDistance = camera.far / 2;
      controls.target.set(0, 0, 0);
      controls.update();

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDemo;
