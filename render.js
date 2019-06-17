let render = function () {
	let time = Date.now()

	requestAnimationFrame(render);

	earth.position.x = Math.cos(time * 0.001) * 10;
	earth.position.y = Math.sin(time * 0.001) * 10;
	earth.position.z = Math.sin(time * 0.001) * 10;

	earth.rotation.y += .05;
	renderer.render(scene, camera);
};

render();