let ids = [10, 2, 20, 5]
let element = prompt("enter the id")
let isfound = ids.findIndex((item) => item == element)
if (isfound == -1) { alert("id not valid") } else { alert("id is valid") }