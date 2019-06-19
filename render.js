function render() {
	let time = Date.now()

	requestAnimationFrame(render);

	// Earth
	mercury.position.x = Math.cos(time * 0.001) * 14;
	mercury.position.z = Math.sin(time * 0.001) * 14;

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 19;
	earth.position.z = Math.sin(time * 0.001) * 19;

	// Mars
	mars.position.x = Math.cos(time * 0.00095) * 25;
	mars.position.z = Math.sin(time * 0.00095) * 25;

	// Moon
	moon.position.x = Math.cos(time * 0.001) * 22;
	moon.position.z = Math.sin(time * 0.001) * 22;

	mercury.rotation.y += .02;
	earth.rotation.y += 3.65;
	moon.rotation.y += .365;
	mars.rotation.y += .387;
	sun.rotation.y += .01;

	renderer.render(scene, camera);
};

render();