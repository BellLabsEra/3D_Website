import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js'

// Creating a Scene

// Setting up 3 objects: scene, camera, renderer
// such that we can functionally render the scene with the camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // [footnote 1]
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);     // adding the renderer element to our HTML document
                                                    // <canvas> element
// Adding Objects that will be rendered in the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});     // color attribute is GREEN
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);        

camera.position.z = 5;      // move the camera enough of

/**
 * Rendering the scene
 */
function animate() {
    requestAnimationFrame(animate);
    // Animating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
// WebGL Compatibility Check
if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
















/*
    [Footnote 1] 
    Perspective Camera Attributes:
        (1) Field of View (FOV)
        (2) Aspect Ratio
        (3) near - clipping plane
        (4) far - clipping plane
    re-look @ Three.js documentation if you want the renderer to provide varying levels of resolution 
    and or set the window size smaller for higher resolution, but if you want lower resolution,
    pass false as thelast argument in the setSize() method to de-res the canvas

    
*/