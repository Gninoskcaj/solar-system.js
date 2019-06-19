let jupiterColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earth.jpg'
);


let jupiterGeo = new THREE.SphereBufferGeometry(2, 32, 16);
let jupiterStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: jupiterColorMap,
});
let earth = new THREE.Mesh(jupiterGeo, jupiterStandardMater);
scene.add(jupiter);