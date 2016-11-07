

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
			newUlItem.setAttribute('class','clickable')
			newUlItem.innerText = listItemArray[i];
			displayList.appendChild(newUlItem);
			newUlItem.addEventListener("click", crossOffItem);	
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

	
function crossOffItem(strikeThroughEvent){
	if (strikeThroughEvent.target.classList.contains("strike-through")){
		strikeThroughEvent.target.classList.remove("strike-through");
	}
	else{
		strikeThroughEvent.target.classList.add("strike-through");
	}
}
