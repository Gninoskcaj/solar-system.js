
let texture = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

let geometry = new THREE.SphereBufferGeometry(2, 32, 16);
let material = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: texture,
});
let earth = new THREE.Mesh(geometry, material);
scene.add( earth );
earth.rotation.x -= .6;

var geometry = new THREE.CircleGeometry( 5, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var circle = new THREE.Mesh( geometry, material );
scene.add( circle );