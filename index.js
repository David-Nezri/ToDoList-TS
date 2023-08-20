var form = document.querySelector("form");
//the sign "?" typescript don't sure that the element form is on the page 
form.addEventListener("submit", onSubmit);
//
function onSubmit(e) {
    e.preventDefault();
    var input = document.querySelector("#task-name");
    var task = createTask(input.value);
    input.value = "";
    var taskList = document.querySelector(".task-list");
    taskList.prepend(task);
    //console.log(input.value)
}
function createTask(text) {
    var div = document.createElement("div");
    div.classList.add("task");
    var h3 = document.createElement("h3");
    h3.textContent = text;
    var del = document.createElement("button");
    del.textContent = "del";
    del.addEventListener("click", function () {
        var parent = del.parentElement;
        parent.remove();
    });
    div.appendChild(h3);
    div.appendChild(del);
    return div;
}
