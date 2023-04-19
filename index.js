// Add your code here
const data = {
    name: "Steve",
    email: "steve@steve.com",
};

const configObject = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(data),
};

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", configObject)
        .then((response) => response.json())
        .then((object) => {
            const id = document.createElement('div');
            id.innerHTML = object.id;

            document.body.appendChild(id);
        })
        .catch(function(error) {
            const err = document.createElement('div');
            err.innerHTML = error;
            document.body.appendChild(err);
        });
}