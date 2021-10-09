let clouds = document.getElementById('clouds');
let moon = document.getElementById('sun');
let mountain_behind = document.getElementById('mountain_behind');
let mountain_front = document.getElementById('mountain_front');
let text = document.getElementById('text');
let text_paragraph = document.getElementById('text_p');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

window.addEventListener('scroll',function(){
	let value = window.scrollY;
	clouds.style.left = value * 0.25 + 'px';
	clouds.style.top = value * 0.25 + 'px';
	moon.style.top = value * 1.05 + 'px';
	mountain_behind.style.top = value * 0.6 + 'px';
	mountain_front.style.top = value * 0 + 'px';
			
	text.style.marginTop = value * 1 + 'px';
			
	text_paragraph.style.marginTop = value * 1 + 'px';
	btn.style.marginTop = value * 1 + 'px';
	header.style.top = value * 0.9 + 'px';
})