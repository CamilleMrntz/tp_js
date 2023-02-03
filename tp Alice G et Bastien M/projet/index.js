let elInput = document.querySelector('.post');
let elSubmit = document.querySelector('.submitPost');
let message = document.querySelector('.message');
let elEbutton = document.querySelector('.ebutton');

let value = '';

elInput.addEventListener('input', event => {
  value = event.target.value;
});

elSubmit.addEventListener('click', onClick => {
  change(value)
});


function calculate(number) {
  const count = (number.match(/e/g) || []).length;
  return count
}

function change(value) {

fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${value}`)
      .then(response => response.json())
      .then(json => iterate(json))
}

function iterate(json) {
  let total = 0;
  document.querySelector('.message').innerHTML = "";
  json.map((x) => {
  document.querySelector('.message').innerHTML += `<h3>${x.title}</h3>`
  document.querySelector('.message').innerHTML += `<p>${x.body}</p>`
  document.querySelector('.message').innerHTML += `<p class="result">Il y a ${calculate(x.title)} "e" dans le titre</p>`

  total += calculate(x.title)
  })
  let average = total / json.length

  elEbutton.addEventListener('click', onClick => {
  return document.querySelector('.message').innerHTML += `<p class="warning">Il y a en moyenne ${average} "e"</p>`
  });
}
