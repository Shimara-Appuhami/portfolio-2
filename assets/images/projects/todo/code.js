function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        return;
    }

    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);

    var deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-trash-24.png";
    deleteBtn.alt = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(textNode);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("myInput").value = ""; // Clear input field after adding task
    updateTaskCount();
}


document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("deleteBtn")) {
        var li = e.target.parentNode; // Get parent <li> of the delete icon
        li.remove();
        updateTaskCount();
    }
});
