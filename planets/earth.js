
let texture = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

let geometry = new THREE.SphereBufferGeometry(2, 32, 16);
let material = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: texture,
});
let circle = new THREE.Mesh(geometry, material);
scene.add(circle);
circle.rotation.x -= .6;