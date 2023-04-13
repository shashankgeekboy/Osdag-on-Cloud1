import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const loader = new STLLoader();
loader.load( 'model.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
    const mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

} );
