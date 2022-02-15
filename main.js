function circle1Clicked() {
    let displayCount = document.getElementById("numClicks"); 

    let newCount = parseInt(displayCount.innerHTML);
    newCount++;

    displayCount.innerHTML = newCount; 
}

function circle2Mouseover() {
    let circle2 = document.getElementById("circle2");
    circle2.style.strokeWidth = 3;
}

function circle2Mouseout() {
    let circle2 = document.getElementById("circle2");
    circle2.style.strokeWidth = 0;
}

function circle3Clicked(){
    let circle3 = document.getElementById("circle3");
    let opacity = circle3.style.opacity;

    if(opacity == 1){
        opacity = 0;
    }
    else {
        opacity = 1;
    }

    circle3.style.opacity = opacity;
}