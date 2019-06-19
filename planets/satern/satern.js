let earthColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earth.jpg'
);

let saternGeo = new THREE.SphereBufferGeometry(2, 32, 16);
let saternStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: saternColorMap,
});
let satern = new THREE.Mesh(saternGeo, saternStandardMater);
scene.add(satern);