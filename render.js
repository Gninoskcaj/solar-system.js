function render() {
	let time = Date.now()

	requestAnimationFrame(render);

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 12;
	earth.position.y = Math.sin(time * 0.001) * 12;
	earth.position.z = Math.sin(time * 0.001) * 12;

	// Mars
	mars.position.x = Math.cos(time * 0.00095) * 14;
	mars.position.y = Math.sin(time * 0.00095) * 14;
	mars.position.z = Math.sin(time * 0.00095) * 14;


	earth.rotation.y += .365;
	mars.rotation.y += .387;
	sun.rotation.y += .01;
	renderer.render(scene, camera);
};

render();