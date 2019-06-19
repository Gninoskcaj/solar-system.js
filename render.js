function render() {
	let time = Date.now()

	requestAnimationFrame(render);

	// Earth
	mercury.position.x = Math.cos(time * 0.0017) * 14;
	mercury.position.z = Math.sin(time * 0.0017) * 14;

	// Venus
	venus.position.x = Math.cos(time * 0.0007) * 18;
	venus.position.z = Math.sin(time * 0.0007) * 18;

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 28;
	earth.position.z = Math.sin(time * 0.001) * 28;

	// Mars
	mars.position.x = Math.cos(time * 0.00095) * 35;
	mars.position.z = Math.sin(time * 0.00095) * 35;

	// // Moon
	// moon.position.x = Math.cos(time * 0.001) * 28;
	// moon.position.z = Math.sin(time * 0.001) * 28;

	mercury.rotation.y += .1;
	earth.rotation.y += 3.65;
	moon.rotation.y += .365;
	mars.rotation.y += .387;
	sun.rotation.y += .01;

	renderer.render(scene, camera);
};

render();