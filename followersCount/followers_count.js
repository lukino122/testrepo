let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById(`countDisplay`).innerHTML=count;
}
function checkCountValue(){
    if (count === 10){
        alert("Your instagram post gained 10 followers! Congrats");
    }else if(count === 20){
        alert("your intsagram post gained 20 followers! keep it up")
    }
}

function resetCount(){
    count === 0;
    displayCount();
    alert(`reseted`)
}