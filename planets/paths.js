// Global
let pathBasicMater = new THREE.LineBasicMaterial({
	color: 0xffffff,
	transparent: true,
	opacity: .3
	});

// Mercury Path
var mercuryPathRadLoop = 14;
let mercuryPathSegLoop = 128;
let mercuryPathGeo = new THREE.CircleGeometry(mercuryPathRadLoop,mercuryPathSegLoop);
let mercuryPath = new THREE.LineLoop(mercuryPathGeo, pathBasicMater);

mercuryPathGeo.vertices.shift();
mercuryPath.rotation.x = 14.16;


// Venus Path
var venusPathRadLoop = 20;
let venusPathSegLoop = 128;
let venusPathGeo = new THREE.CircleGeometry(venusPathRadLoop,venusPathSegLoop);
let venusPath = new THREE.LineLoop(venusPathGeo, pathBasicMater);

venusPathGeo.vertices.shift();
venusPath.rotation.x = 14.16;

// Earth Path
var earthPathRadLoop = 28;
let earthPathSegLoop = 128;
let earthPathGeo = new THREE.CircleGeometry(earthPathRadLoop,earthPathSegLoop);
let earthPath = new THREE.LineLoop(earthPathGeo, pathBasicMater);

earthPathGeo.vertices.shift();
earthPath.rotation.x = 14.16;


// Mars
var marsPathRadLoop = 35.4;
let marsPathSegLoop = 128;
let marsPathGeo = new THREE.CircleGeometry(marsPathRadLoop , marsPathSegLoop);
let marsPath = new THREE.LineLoop(marsPathGeo, pathBasicMater);

// Jupiter Path
var jupiterPathRadLoop = 50;
let jupiterPathSegLoop = 128;
let jupiterPathGeo = new THREE.CircleGeometry(jupiterPathRadLoop,mercuryPathSegLoop);
let jupiterPath = new THREE.LineLoop(jupiterPathGeo, pathBasicMater);

jupiterPathGeo.vertices.shift();
jupiterPath.rotation.x = 14.16;



marsPathGeo.vertices.shift();
marsPath.rotation.x = 14.16;


// Add Paths

scene.add(mercuryPath);
scene.add(venusPath)
scene.add(marsPath);
scene.add(jupiterPath)
scene.add(earthPath);
