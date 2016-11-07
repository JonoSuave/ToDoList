

function taskGenerator(){
	var taskItem = document.getElementById("toDoItem");
	var listItemArray = [];
	var displayList = document.getElementById("display-list")

	if (taskItem.value.trim() === '') {
		alert("Dont tell me you got nothin!")
	}
	else {
		listItemArray = taskItem.value.split(',');
		for(i=0;i<listItemArray.length;i++){
			var newUlItem = document.createElement("li");
			newUlItem.innerText = listItemArray[i];
			displayList.appendChild(newUlItem);
				
			// listItemArray.push(taskItem.value);
			// No need to do innerHTML b/c it's an input, which doesn't have a closing tag (thus no innerHTML b/n an opening and closing tag). 
			// ".value" is acts like innerHTML for <input>
		}
		taskItem.value = '';

	}
}
function enterKeyPressed(event){
	var keyPressed = event.keyCode;
	if (keyPressed === 13) {
		taskGenerator();
	}
}



