console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


const catPhoto = document.querySelector('img')

catPhoto.addEventListener('mouseover', (event) => {
	alert('you're a mice eater')
});

