let render = function () {
	let time = Date.now()

	requestAnimationFrame(render);

	circle.position.x = Math.cos(time * 0.001) * 10;
	circle.position.y = Math.sin(time * 0.001) * 10;
	circle.position.z = Math.sin(time * 0.001) * 10;

	circle.rotation.y += .05;
	renderer.render(scene, camera);
};

render();