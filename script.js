const main = document.querySelector('#main')
const header = document.createElement('div')
const middle = document.createElement('div')
const footer = document.createElement('div')
header.setAttribute('id', 'header');
middle.setAttribute('id', 'middle');
footer.setAttribute('id', 'footer');
header.classList.add('section');
middle.classList.add('section');
footer.classList.add('section');
main.appendChild(header)
main.appendChild(middle)
main.appendChild(footer)

const grid = document.createElement('div')
const gridHeader = document.createElement('div')
grid.setAttribute('id', 'grid');
gridHeader.setAttribute('id', 'gridHeader');

middle.appendChild(gridHeader);
middle.appendChild(grid);

const gridSizeSmall = document.createElement('button')
const gridSizeMedium = document.createElement('button')
const gridSizeLarge = document.createElement('button')

const colorBlack = document.createElement('button')
const colorRandom = document.createElement('button')
const colorEraser = document.createElement('button')
const colorGrey = document.createElement('button')

let color = "black";

colorBlack.setAttribute('onclick', 'changeColor(`black`)');
colorRandom.setAttribute('onclick', 'changeColor(`random`)');
colorEraser.setAttribute('onclick','changeColor(`white`)');
colorGrey.setAttribute('onclick', 'changeColor(`grey`)');

gridSizeSmall.setAttribute('id', 'small')
gridSizeMedium.setAttribute('id', 'medium')
gridSizeLarge.setAttribute('id', 'large')

gridSizeSmall.classList.add('button', 'gridSizeSmall')
gridSizeMedium.classList.add('button', 'gridSizeMedium')
gridSizeLarge.classList.add('button', 'gridSizeLarge')

colorBlack.classList.add('button', 'colorBlack')
colorRandom.classList.add('button', 'colorRainbow')
colorEraser.classList.add('button', 'colorEraser')
colorGrey.classList.add('button', 'colorGrey')

const buttonsLeft = document.createElement('div')
const buttonsRight = document.createElement('div')
const buttonsMiddle = document.createElement('div')
const buttonsMiddleText = document.createElement('div')
const buttonsMiddleSection = document.createElement('div')

buttonsLeft.setAttribute('id', 'buttonsLeft')
buttonsMiddle.setAttribute('id', 'buttonsMiddle')
buttonsRight.setAttribute('id', 'buttonsRight')
buttonsMiddleText.setAttribute('id', 'buttonsMiddleText')
buttonsMiddleSection.setAttribute('id', 'buttonsMiddleSection')


colorBlack.textContent =  "Black"
colorRandom.textContent = "Random"
colorEraser.textContent = "Eraser"
colorGrey.textContent = "Grey"

gridSizeSmall.textContent = "16 x 16"
gridSizeMedium.textContent = "32 x 32"
gridSizeLarge.textContent = "64 x 64"
buttonsMiddleText.textContent = "Choose grid size"

buttonsLeft.appendChild(colorBlack)
buttonsLeft.appendChild(colorEraser)

buttonsRight.appendChild(colorRandom)
buttonsRight.appendChild(colorGrey)

buttonsMiddle.appendChild(gridSizeSmall)
buttonsMiddle.appendChild(gridSizeMedium)
buttonsMiddle.appendChild(gridSizeLarge)

buttonsMiddleSection.appendChild(buttonsMiddleText)
buttonsMiddleSection.appendChild(buttonsMiddle)

gridHeader.appendChild(buttonsLeft)
gridHeader.appendChild(buttonsMiddleSection)
gridHeader.appendChild(buttonsRight)

const small = document.querySelector('#small')
const medium = document.querySelector('#medium')
const large = document.querySelector('#large')

const gridBlocks = function(x){

    const newGrid = grid.querySelectorAll('div')
    newGrid.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${x} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x} , 1fr)`;

    for (i = 0; i < (x * x); i++){
        let box = document.createElement('div');
        box.classList.add('insideGrid');
        grid.insertAdjacentElement('beforeend', box);
        box.addEventListener('mouseover', (gridColor))
    }
}



small.addEventListener('click', () => {
    gridBlocks(16);
});

medium.addEventListener('click', () => {
    gridBlocks(32);
})

large.addEventListener('click', () => {
    gridBlocks(64);
})

let frequency = .3;
for (var i = 0; i < 32; ++i)
{
   console.log( Math.sin(frequency * i)  );
}

function gridColor(){
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}