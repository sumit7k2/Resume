// smooth scroll
var navMenu=document.querySelectorAll('.nav-menu a');

for(var i=0;i<navMenu.length;i++)
{
	navMenu[i].addEventListener('click',function (event) {
		event.preventDefault();
		var targetIdSelector=this.textContent.trim().toLowerCase();
		var targetsection=document.getElementById(targetIdSelector);
		var interval=setInterval(function() {
			var coordinates=targetsection.getBoundingClientRect();
			if(coordinates.top<=0)
			{
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},20);
	});
}

// auto fill bars
var progressBar=document.querySelectorAll('.skill-progress>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkscroll);
var animationDone = false;

function initialiseBars() {
	for(let bar of progressBar){
		bar.style.width = 0 + '%';
	}

}
initialiseBars();
function fillBars(){
	for(let bar of progressBar)
	{
		let targetWidth=bar.getAttribute('data-bar-width');
		let currentwidth=0;
		let interval=setInterval(function(){
			if(currentwidth>targetWidth)
			{
				clearInterval(interval);
				return;
			}
			currentwidth++;
			bar.style.width = currentwidth + '%';
		},10)
	}
}
function checkscroll () {
	var coordinatesSkill=skillContainer.getBoundingClientRect();
	if(!animationDone && coordinatesSkill.top<=window.innerHeight)
	{
		animationDone=true;
		fillBars();
	}
	else if(coordinatesSkill.top>window.innerHeight){
		animationDone=false;
		initialiseBars();
	}
}