const btn = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');

content.style.cssText = `height: 0; overflow: hidden`;

let animationShowContent = [
	{ height: '0', overflow: 'hidden' },
	{
		height: '100px',
		overflow: 'auto',
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
	},
];

let showContentTiming = {
	duration: 900,
	iterations: 1,
	fill: 'forwards',
};

const animationContent = content.animate(
	animationShowContent,
	showContentTiming
);
animationContent.cancel();

const showCurrentBtn = () => {
	if (!btn.classList.contains('active')) {
		btn.firstElementChild.style.display = 'none';
		btn.lastElementChild.style.display = 'block';
	} else {
		btn.firstElementChild.style.display = 'block';
		btn.lastElementChild.style.display = 'none';
	}
};

showCurrentBtn(btn);

const showContent = () => {
	btn.classList.toggle('active');

	showCurrentBtn(btn);

	btn.classList.contains('active')
		? animationContent.play()
		: animationContent.cancel();
};

btn.addEventListener('click', showContent);
