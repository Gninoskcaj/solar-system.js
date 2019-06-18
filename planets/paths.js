var earthPathGeo = new THREE.CircleGeometry( 5, 32 );
var earthPathMater = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var circle = new THREE.Mesh( geometry, material );
scene.add( circle );