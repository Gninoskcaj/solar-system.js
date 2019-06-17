// #1
let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// #2
let texture = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

let geometry = new THREE.SphereBufferGeometry(2, 32, 16);
let material = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: texture
});
let circle = new THREE.Mesh(geometry, material);
scene.add(circle);

let sun = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg')

var bulbLight = new THREE.PointLight(0xffffff, 3, 50);
bulbLight.position.set(50, 50, 50);

var bulbGeo = new THREE.SphereBufferGeometry(2, 16)

bulbMat = new THREE.MeshStandardMaterial({
	emissive: 'white',
	emissiveMap: sun,
	emissiveIntensity: 3,
	map: sun,
});

bulbLight.add(new THREE.Mesh(bulbGeo, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;
scene.add(bulbLight);





camera.position.z = 5;
let controls = new THREE.OrbitControls(camera, renderer.domElement);
circle.rotation.x -= .6;
// #3
let render = function () {
	let time = Date.now()

	requestAnimationFrame(render);

	circle.position.x = Math.cos(time * 0.001) * 10;
	circle.position.y = Math.sin(time * 0.001) * 10;
	circle.position.z = Math.sin(time * 0.001) * 10;

	circle.rotation.y += .05;
	renderer.render(scene, camera);
};

render();

