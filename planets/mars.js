	let marsTexture = new THREE.TextureLoader().load(
		'https://space-assets-1.s3.us-east-2.amazonaws.com/land_ocean_ice_cloud_2048.jpg');

	let marsGeometry = new THREE.SphereBufferGeometry(10, 32, 16);
	let marsMaterial = new THREE.MeshBasicMaterial({
		flatShading: false,
		wireframe: false,
		map: texture,
	});
	let mars = new THREE.Mesh(geometry, material);
	scene.add(mars);
	mars.rotation.x -= .6;
