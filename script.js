//your JS code here. If required.
let h1 = document.createElement('h1');
h1.innerText = "The Taj Mahal";
let p1 = document.createElement('p');
p1.innerText = "The Taj Mahal is an iconic symbol of love and architectural brilliance located in Agra, India. ";
let hr = document.createElement('hr');

let ol = document.createElement('ol');
let tajMahalAttractions = [
  "Architectural Beauty",
  "Dome and Minarets",
  "Gardens and Reflecting Pool",
  "Calligraphy and Inscriptions",
  "Historical Significance"
];

	tajMahalAttractions.forEach((att)=>{
		let li =  document.createElement('li');
		li.innerText = att;
		ol.appendChild(li);
	
	})

let ul = document.createElement('ul');
let favoriteFoods = [
  "Pizza",
  "Sushi",
  "Chocolate Cake",
  "Tacos",
  "Pasta"
];
favoriteFoods.forEach((food)=>{
		let li =  document.createElement('li');
		li.innerHTML= `<b><i>${food}</i></b>`;
		ul.appendChild(li);
})
let render = [h1,p1,hr,ol,ul];
render.forEach((el)=>{
	document.body.appendChild(el);
})

console.log(document.body)
// document.body.appendChild(br);

