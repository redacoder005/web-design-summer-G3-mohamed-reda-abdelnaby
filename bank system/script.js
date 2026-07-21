let users = [];

function adduser() {
    let id = prompt("please enter the id")
    let name = prompt("enter your name")
    let balance = prompt("enter the balance")
    users.push({
        id: id,
        name: name,
        balance: balance,
    });
}

function editUserBalanceById() {
    let id = prompt("please enter your id")
    let newbalance = prompt("please enter the new balance")
    let index = users.findIndex(item => item.id === id);
    users[index].balance = newbalance;
}

function transferBalance() {
    let fromId = prompt("Transfer From ID");
    let toId = prompt("Transfer To ID");
    let amount = prompt("Enter Amount");

    let senderIndex = users.findIndex(item => item.id === fromId);
    let receiverIndex = users.findIndex(item => item.id === toId);
    users[senderIndex].balance -= amount;
    users[receiverIndex].balance += amount;
}

function deleteUserById() {
    let id = prompt("Enter User ID to delete");

    let index = users.findIndex(iem => item.id === id);



    users.splice(index, 1);
}
adduser();
adduser();
adduser();