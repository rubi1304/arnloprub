const colors = [
	'red',
	'orange',
	'green',
	'purple',
	'indigo',
	'violet'
];
const body = document.querySelector('body')

for (let color of colors) {
	const newBox = document.createElement('div')
	newBox.classList.add('caja')
	newBox.style.backgroundColor = color
	newBox.innerText = color
	boxes.appendChild(newBox)
	newBox.addEventListener("mouseover", () => {
		body.style.backgroundColor = newBox.style.backgroundColor
		console.log(newBox.style.backgroundColor)
	})
};
