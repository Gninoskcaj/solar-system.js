	let marsTexture = new THREE.TextureLoader().load(
		'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

	let marsGeometry = new THREE.SphereBufferGeometry(1, 32, 16);
	let marsMaterial = new THREE.MeshStandardMaterial({
		flatShading: false,
		wireframe: false,
		map: marsTexture,
	});
	let mars = new THREE.Mesh(marsGeometry, marsMaterial);
	scene.add(mars);
	mars.rotation.x -= .6;
