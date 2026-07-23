let form = document.getElementById("form");
let usersContainer = document.getElementById("usersContainer");

let users = [];

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let user = {
        id: Date.now(),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    users.push(user);

    displayUsers();

    form.reset();

});


function displayUsers() {

    usersContainer.innerHTML = "";

    users.forEach(function(user) {

        let card = document.createElement("div");
        card.className = "card shadow-sm mb-3";

        card.innerHTML = `
            <div class="card-body">
                <h4>Name: ${user.name}</h4>
                <p>Email: ${user.email}</p>

                <button class="btn btn-success me-2 editBtn">
                    Edit
                </button>

                <button class="btn btn-danger deleteBtn">
                    Delete
                </button>
            </div>
        `;


        card.querySelector(".deleteBtn").addEventListener("click", function() {

            let index = users.findIndex(function(item) {
                return item.id === user.id;
            });

            users.splice(index, 1);

            displayUsers();

        });


        card.querySelector(".editBtn").addEventListener("click", function() {

            let newName = prompt("Enter new name", user.name);
            let newEmail = prompt("Enter new email", user.email);

            if (newName !== null && newEmail !== null) {

                let index = users.findIndex(function(item) {
                    return item.id === user.id;
                });

                users[index].name = newName;
                users[index].email = newEmail;

                displayUsers();
            }

        });

        usersContainer.appendChild(card);

    });

}