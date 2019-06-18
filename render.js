function render() {
	let time = Date.now()

	requestAnimationFrame(render);

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 14;
	earth.position.z = Math.sin(time * 0.001) * 14;

	// Mars
	mars.position.x = Math.cos(time * 0.00095) * 17;
	mars.position.z = Math.sin(time * 0.00095) * 17;


	earth.rotation.y += .365;
	mars.rotation.y += .387;
	sun.rotation.y += .01;
	renderer.render(scene, camera);
};

render();