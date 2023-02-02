let elInput = document.querySelector('.post');
let elSubmit = document.querySelector('.submitPost');
let message = document.querySelector('.message');

let value = '';

elInput.addEventListener('input', event => {
    value = event.target.value;
});

elSubmit.addEventListener('click', async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${value}`);
    const posts = await response.json();

    let sum = 0;
    let count = 0;
    posts.forEach(post => {
        const title = post.title;
        count = title.split("e").length - 1;
        sum += count;
        message.innerHTML += `<p class="result">Le titre "${title}" a ${count} "e"</p>`;
    });

    message.innerHTML += `<p class="warning">La moyenne des "e" est de ${sum / posts.length}</p>`;
});
