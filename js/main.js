const max = 12;
const tops = [];
const middles = [];
const bottoms = [];
const topEl = document.getElementById('top');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const mainEl = document.querySelector('main');

for (let i = 1; i <= max; i++) tops.push(`top-${i.toString().padStart(2, '0')}.jpg`);
for (let i = 1; i <= max; i++) middles.push(`middle-${i.toString().padStart(2, '0')}.jpg`);
for (let i = 1; i <= max; i++) bottoms.push(`bottom-${i.toString().padStart(2, '0')}.jpg`);

const summonDemon = () => {
	const top = tops[Math.floor(Math.random() * max)];
	const middle = middles[Math.floor(Math.random() * max)];
	const bottom = bottoms[Math.floor(Math.random() * max)];
	
	topEl.src = `img/${top}`;
	middleEl.src = `img/${middle}`;
	bottomEl.src = `img/${bottom}`;
	
	mainEl.classList.remove('shake');
	setTimeout(() => {
		mainEl.classList.add('shake');
	}, 0);
};

document.getElementById('summon').addEventListener('click', summonDemon);
