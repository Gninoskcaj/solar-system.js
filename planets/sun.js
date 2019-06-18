let sun = new THREE.PointLight(0xffffff, 2, 100);
sun.position.set(50, 50, 50);

let sunPic = new THREE.TextureLoader().load('https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg')
sun.position.set(50, 50, 50);

let bulbGeo = new THREE.SphereBufferGeometry(2, 32, 16)

sunMat = new THREE.MeshStandardMaterial({
	emissive: 'yellow',
	emissiveMap: sunPic,
	emissiveIntensity: 12,
});

sun.add(new THREE.Mesh(bulbGeo, sunMat));
sun.position.set(0, 2, 0);
sun.castShadow = true;

scene.add(sun)