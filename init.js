let sceneBakgroundTextureLoader = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/milky-WAY.png')
let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 2000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 12;
camera.position.x = 20;
camera.position.z = 12;
scene.background = {
	texture: sceneBakgroundTextureLoader
}

hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 1 );
scene.add( hemiLight );
