let cloud1 = document.getElementById("cloud1");
let cloud2 = document.getElementById("cloud2");
let cloud3 = document.getElementById("cloud3");
let fog = document.getElementById("fog");
let sun = document.getElementById('sun');
let mountain_behind = document.getElementById('back');
let mountain_front = document.getElementById('front');

let moon = document.getElementById('moon');

window.addEventListener('scroll',function(){
	let value = window.scrollY;
	cloud1.style.top = value * 0.6 + 'px';
	cloud2.style.top = value * 0.6 + 'px';
	cloud3.style.top = value * 0.6 + 'px';
	fog.style.top = value * 0.6 + 'px';
	sun.style.top = value * 1.2 + 'px';
	mountain_behind.style.top = value * 0.6 + 'px';
	mountain_front.style.top = value * 0.1 + 'px';

	moon.style.top = value * 0.8 + 'px';
			
})

function openYoutube(){
	window.open('https://www.youtube.com/c/jaymar921', '_blank');
}
function openSpigot(){
	window.open('https://www.spigotmc.org/resources/authors/1073076/', '_blank');
}