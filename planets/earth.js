
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
circle.rotation.x -= .6;


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

