function addNewList() {
    alert('hello world!');
}

function addListItem() {
	var list = document.getElementById("grocery-list");
	var itemInput = document.getElementById("new-list-item");
	var newItem = document.createElement("li");

	newItem.appendChild(document.createTextNode(itemInput.value));
	list.appendChild(newItem);

    console.log('hello world');
}

function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.parentNode.removeChild(item);
}
