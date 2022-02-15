function buttonClicked() {
    let newText = "Button was clicked!"; 
    // we need to select the button-div (using its id) 
    let buttonDiv = document.getElementById("button-div"); 
    // then we buttonDiv's content
    buttonDiv.innerHTML = newText; 
}