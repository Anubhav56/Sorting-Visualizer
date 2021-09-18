//swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(e1, e2){
    let temp = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = temp;
}

//Disables sorting buttons used in conjuction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

//Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

//Disables size slider used in conjuction with enable, so that we can disableduring sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

//Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milli){
    return new Promise(resolve =>{
        setTimeout(() => {resolve('')}, milli);
    })
}

//Selecting size slidedr from DOM
let arraySize = document.querySelector('#arr_sz');

//Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

//Default input for waitforme function (260ms)
let delay = 260;

//Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

//Event listener to update delay time
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//Creating array to store randomly generated numbers
let array = [];

//Call to display bars right when you visit the site
createNewArray();

//To create new array input size of array
function createNewArray(nBars = 60){
    //calling helper function to delete old bars from dom
    deleteChild();

    //creating an array of random numbers
    array = [];
    for(let i = 0; i<nBars; i++){
        array.push(Math.floor(Math.random() *200) + 1);
    }
    console.log(array);

    //select the div #bars element
    const bars = document.querySelector("#bars");
    
    //create multiple element div using loop and adding class 'bar col'
    for(let i = 0; i<nBars; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    } 
}

//Helper function to delete all the previous bars so that new can be added
function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray" + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});