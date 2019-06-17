

const THREE = require('three')
// #1
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// #2
var texture = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

var geometry = new THREE.SphereBufferGeometry(2, 32, 16);
var material = new THREE.MeshBasicMaterial({ flatShading: false, shininess: 10, wireframe: false, map: texture });
var circle = new THREE.Mesh(geometry, material);
scene.add(circle);

scene.add(circle);
camera.position.z = 5;
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// #3
var render = function () {
	requestAnimationFrame(render);
	circle.rotation.x += .01;
	circle.rotation.y += .01;
	renderer.render(scene, camera);
};


render();