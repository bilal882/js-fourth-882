let array = [];
function addTodo() {
    let title = document.getElementById("input").value;
    array.push(title);

    for (let i = 0; i < 1; i++) {
        document.getElementById("output").innerHTML += title + "<br/>"
    }


    document.getElementById("input").value = ""
    document.getElementById("location").value = ""
    document.getElementById("description").value = ""

}

console.log(array);