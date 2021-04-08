const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", formHandler);
}

let formHandler = event => {
    event.preventDefault();
    let searchValue = event.target.querySelector("#searchByID").value;

    fetch(`http://localhost:3000/movies/${searchValue}`)
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
}

document.addEventListener('DOMContentLoaded', init);