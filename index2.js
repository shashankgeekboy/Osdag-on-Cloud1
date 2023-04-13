// frontend/src/components/CADViewer.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const CADViewer = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( container.offsetWidth, container.offsetHeight );
    container.appendChild( renderer.domElement );
    const loader = new STLLoader();
    loader.load( '/api/load_cad', function ( geometry ) {
        const material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    });
    camera.position.z = 5;
    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
    animate();
  }, []);
  return (
    <div ref={containerRef}></div>
  );
};

export default CADViewer;
