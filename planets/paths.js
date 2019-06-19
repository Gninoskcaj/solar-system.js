// Global
let pathBasicMater = new THREE.LineBasicMaterial({
	color: 0xffffff,
	transparent: true,
	opacity: .3
	});

// Earth Path
var earthPathRadLoop = 14.7;
let earthPathSegLoop = 128;
let earthPathGeo = new THREE.CircleGeometry(earthPathRadLoop,earthPathSegLoop);
let earthPath = new THREE.LineLoop(earthPathGeo, pathBasicMater);

earthPathGeo.vertices.shift();
earthPath.rotation.x = 14.16;


// Mars
var marsPathRadLoop = 19;
let marsPathSegLoop = 128;
let marsPathGeo = new THREE.CircleGeometry(marsPathRadLoop , marsPathSegLoop);
let marsPath = new THREE.LineLoop(marsPathGeo, pathBasicMater);


marsPathGeo.vertices.shift();
marsPath.rotation.x = 14.16;


// Add Paths

scene.add(marsPath);
scene.add(earthPath);