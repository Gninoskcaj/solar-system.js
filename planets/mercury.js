
let mercuryColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earth.jpg'
);

let mercuryGeo = new THREE.SphereBufferGeometry(.5, 32, 16);
let mercuryStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	normalMap: earthNormalMap,
	metalnessMap: earthMetalnessMap,
	map: earthColorMap,
});
let mercury = new THREE.Mesh(mercuryGeo, mercuryStandardMater);
scene.add(mercury);