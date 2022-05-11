//create the grids for the etch-a-sketch

// const content = document.createElement('div');
// content.classList.add('etch-flexbox');
// container.appendChild(content);
// const grid = document.createElement('div');
// grid.forEach((item, i) => {
//
// });

//use CSS grid
//use nested for loop to create a grid
const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const reset = document.createElement('button');
const boxs = container.querySelectorAll('.box');
const grey = document.createElement('button');
const rgb = document.createElement('button');
const red = document.createElement('button');
const slider = document.createElement('input');
slider.setAttribute('type', 'range');
buttons.appendChild(slider)

//create on click event that allows user to draw in the box
// window.onload = clickBox();
function clickBox(){
    const boxs = container.querySelectorAll('.box')
      boxs.forEach(box => box.addEventListener('mouseover', () => {
          box.style.background = 'black'
      }))
  }


//function that creates grid
function createGrid (col, rows) {

    for(let i = 0;i < (col*rows);i++){
        const square = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(square).classList.add('box')
    }
}

//function that changes colours of grids to grey on click
function greyGrid () {
  const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'grey'
    }))
    grey.addEventListener('click', greyGrid);
    grey.textContent='Grey';
    buttons.appendChild(grey);
}




 function redGrid () {
   const boxs = container.querySelectorAll('.box')
     boxs.forEach(box => box.addEventListener('mouseover', () => {
         box.style.background = 'red'
     }))
     red.addEventListener('click', redGrid);
     red.textContent='RED';
     buttons.appendChild(red);
 }

 function rgbColor () {
   const boxs = container.querySelectorAll('.box')
          boxs.forEach(box => box.addEventListener('mouseover', () => {
              let R = Math.floor(Math.random() * 256);
              let G = Math.floor(Math.random() * 256);
              let B = Math.floor(Math.random() * 256);
              const RGB = `rgb(${R},${G},${B})`;
              box.style.background = RGB;
          }))
          rgb.addEventListener('click', rgbColor);
          rgb.textContent='RGB';
          buttons.appendChild(rgb);
      }

//change size of grid
function modifyGridSize() {
  let boxes = container.querySelectorAll(".box");
  boxes.forEach(box => box.remove());
  createGrid(slider.value, slider.value);
  clickBox();
  greyGrid();
  redGrid();
  rgbColor();
  clickBox();
  resetGrid();

}

slider.addEventListener("mouseup", modifyGridSize);


 function resetGrid() {
 reset.addEventListener('click', () => {
   boxs.textContent='';
   window.setTimeout(() => {
       window.location.reload(true);
   }, 0);
 });
 reset.textContent='Reset';
 buttons.appendChild(reset);
 }



createGrid(16,16);
greyGrid();
redGrid();
rgbColor();
clickBox();
resetGrid()

//clearing the grid squares

//function that changes colours of grids to random colours on click




// const btn = document.querySelector('#box');
// btn.onclick = () => alert('Hello World');



// container.appendChild(gridsquare)


//// TODO:
//UI
//add number for range slider
//make it so that when mouse moves over box, user has to click and drag in order to make drawing
//make sure boxes don't change arrangement when being clicked
