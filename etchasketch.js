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
const boxs = container.querySelectorAll('.box');
// const buttons = document.querySelector('.buttons');

const reset = document.querySelector('.reset');
const grey = document.querySelector('.grey');

const black = document.querySelector('.black');
const rgb = document.querySelector('.rgb');
const slider = document.createElement('input');
const sliderSelect = document.querySelector('.slider')
slider.classList.add('range_slider');
// const slider1 = document.querySelector('.slider');
slider.setAttribute('type', 'range');
slider.setAttribute('min', 1);
sliderSelect.appendChild(slider);

const default_row = 16;
const default_column = 16;



//function that creates grid
function createGrid (col, rows) {

    for(let i = 0;i < (col*rows);i++){
        const square = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(square).classList.add('box')
    }
}

//to refactor code so there aren't any repetitive functions

//create on click event that allows user to draw in the box
// window.onload = clickBox();
function clickGrey () {
    const boxs = container.querySelectorAll('.box')
      boxs.forEach(box => box.addEventListener('mouseover', () => {
          box.style.background = 'grey'
      }))
    grey.addEventListener('click', clickGrey);
  }


//function that changes colours of grids to grey on click
function draw () {
  const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
          box.style.background = 'black'
    }))
    black.addEventListener('click', draw);
    // grey.textContent='Grey';
    // buttons.appendChild(grey);
}







 // function redGrid () {
 //   const boxs = container.querySelectorAll('.box')
 //     boxs.forEach(box => box.addEventListener('mouseover', () => {
 //         box.style.background = 'red'
 //     }))
 //     red.addEventListener('click', redGrid);
 //     red.textContent='RED';
 //     buttons.appendChild(red);
 // }

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
          // buttons.appendChild(rgb);
      }


//change size of grid and append this logic to the UI slider
function modifyGridSize() {
  let boxes = container.querySelectorAll(".box");
  boxes.forEach(box => box.remove());
  createGrid(slider.value, slider.value);
  clickGrey();
  rgbColor();
  // clickBox();
  // resetGrid();
  draw();

}

slider.addEventListener("mouseup", modifyGridSize);

// slider1.addEventListener("mouseup", function() {
//     gridCount = slider1.value;
//     createGrid(gridCount);
//     for (i=0; i < (gridCount * gridCount); i++) {
//         boxs[i].style.background = 'black';
//     };
//   }, false)


 // function resetGrid() {
 // reset.addEventListener('click', () => {
 //   boxs.textContent='';
 //   // window.setTimeout(() => {
 //   //     window.location.reload(true);
 //   // }, 0);
 //   window.setTimeout(() => {
 //       createGrid(default_row, default_column)
 //   }, 0);
 // });
 // }

//reset the grid and append that logic to the Erase button
 function clearDiv() {
  let boxes = container.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.style.backgroundColor = "#dfdfdf"
  )
}
reset.onclick = () => clearDiv();

// function clearGrid() {
//   boxs.textContent = '';
// }
//
// reset.addEventListener('click', () =>{
//   clearGrid();
// })
// function reloadGrid() {
//   clearGrid()
//   createGrid(current_row, current_column)
// }
//
// reset.onclick = () => reloadGrid()



createGrid(default_row, default_column);
clickGrey();
// resetGrid();
rgbColor();
draw();





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
