let video = document.querySelector(".wrapper > video");
let control = document.querySelector(".speed");
let speed = document.querySelector(".speed > .speed-bar");
let isDown = false;



control.addEventListener('mousedown', (e) => {
	isDown = true;
})

control.addEventListener('mouseup', (e) => {
	isDown = false
})
control.addEventListener('mouseleave', (e) => {
	isDown = false;
})

control.addEventListener('mousemove', (e) => {
	if(isDown){
		e.preventDefault();
		let speedHeight = e.pageY-control.offsetTop;
		speed.style.height = `${speedHeight}px`;
		let videoRate = (control.offsetHeight - control.offsetTop) * speedHeight/10000;
		video.playbackRate = videoRate;
		speed.textContent = `${Math.floor(videoRate)}x`;
		console.log(videoRate);
	}
	else{
		return;
	}
})