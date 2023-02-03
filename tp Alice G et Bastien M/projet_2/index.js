let elSel = document.querySelector('.users');
let elSubmit = document.querySelector('.submitUsers');
let message = document.querySelector('.message');

let value = '';

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => iterate(json))

function iterate(json) {
    json.map((x) => {
      let option = document.createElement("option");
      option.value = x.name;
      option.text = x.name;
      elSel.appendChild(option);

      elSel.addEventListener("change", (event) => {
        getId(json, event.target.value);
        document.getElementById("statistiques").innerHTML = event.target.value;
        post(id)
        comment(id)

      function post(value) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
            .then(response => response.json())
            .then(json => console.log(json))
      }
      });
    })
}

function getId(json, userName) {
  let user = json.find((x) => x.name === userName);
    id = user.id;
}

// function getPosts(json) {
//   json.map((x) => {
//     console.log(x.title)
//   })
// }
