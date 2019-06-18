
	let earthColorMap = new THREE.TextureLoader().load(
		'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

	let earthGeo = new THREE.SphereBufferGeometry(2, 32, 16);
	let earthStandardMater = new THREE.MeshStandardMaterial({
		flatShading: false,
		wireframe: false,
		normalMap: earthNormalMap,
		metalnessMap: earthMetalnessMap,
		map: texture,
	});
	let earth = new THREE.Mesh(geometry, material);
	scene.add(earth);
	earth.rotation.x -= .6;
