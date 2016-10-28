function taskGenerator(){
	var newUlItem = document.createElement("li");
	var taskItem = document.getElementById("toDoItem");
	if (taskItem.value.trim() === '') {
		alert("Dont tell me you got nothin!")
	}
	else {
		newUlItem.innerHTML = taskItem.value;
		document.getElementById("display-list").appendChild(newUlItem);	
		taskItem.value = '';
		// No need to do innerHTML b/c it's an input, which doesn't have a closing tag (thus no innerHTML b/n an opening and closing tag). 
		// ".value" is acts like innerHTML for <input>
	}
}
function enterKeyPressed(event){
	var keyPressed = event.keyCode;
	if (keyPressed === 13) {
		taskGenerator();
	}
}