function sun() {
	let bulbLight = new THREE.PointLight(0xffffff, 4, 50);
	bulbLight.position.set(50, 50, 50);

	let sunPic = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg')
	bulbLight.position.set(50, 50, 50);

	let bulbGeo = new THREE.SphereBufferGeometry(2, 32, 16)

	bulbMat = new THREE.MeshStandardMaterial({
		emissive: 'yellow',
		emissiveMap: sunPic,
		emissiveIntensity: 10,
	});

	bulbLight.add(new THREE.Mesh(bulbGeo, bulbMat));
	bulbLight.position.set(0, 2, 0);
	bulbLight.castShadow = true;

	scene.add(bulbLight)
}