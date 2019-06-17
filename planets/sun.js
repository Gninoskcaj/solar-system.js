let sun = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg')

let bulbLight = new THREE.PointLight(0xffffff, 3, 50);
bulbLight.position.set(50, 50, 50);

let bulbGeo = new THREE.SphereBufferGeometry(2, 32, 16)

let sun = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg')

let bulbLight = new THREE.PointLight(0xffffff, 3, 50);
bulbLight.position.set(50, 50, 50);

let bulbGeo = new THREE.SphereBufferGeometry(2, 32, 16)

bulbMat = new THREE.MeshStandardMaterial({
	emissive: 'white',
	emissiveMap: sun,
	emissiveIntensity: 1,
	map: sun,
});