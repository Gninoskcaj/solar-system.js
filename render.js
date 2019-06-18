function render() {
	let time = Date.now()

	requestAnimationFrame(render);

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 10;
	earth.position.y = Math.sin(time * 0.001) * 10;
	earth.position.z = Math.sin(time * 0.001) * 10;

	// Mars
	mars.position.x = Math.cos(time * 0.00115) * 11;
	mars.position.y = Math.sin(time * 0.00115) * 11;
	mars.position.z = Math.sin(time * 0.00115) * 11;


	earth.rotation.y += .25;
	sun.rotation.y += .01;
	mars
	renderer.render(scene, camera);
};

render();