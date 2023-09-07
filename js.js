let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    let url = 'https://jsonplaceholder.typicode.com/users';
    let nameVal = document.getElementById('name').value.toLowerCase();
    let apellido = document.getElementById('lastname').value.toLowerCase();
    let hB = document.getElementById('data').value.toLowerCase();

    let data = {
        nombre: nameVal,
        lastname: apellido,
        cumple: hB
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })

        .then(response => response.json())
        .then((responseData) => {
            console.log('Funciono', responseData);
        })
        .catch((Error) => console.error('Error'));
});
