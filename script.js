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
const colorRainbow = document.createElement('button')
const colorWhite = document.createElement('button')
const colorErase = document.createElement('button')

gridSizeSmall.setAttribute('id', 'small')
gridSizeMedium.setAttribute('id', 'medium')
gridSizeLarge.setAttribute('id', 'large')

gridSizeSmall.classList.add('button', 'gridSizeSmall')
gridSizeMedium.classList.add('button', 'gridSizeMedium')
gridSizeLarge.classList.add('button', 'gridSizeLarge')

colorBlack.classList.add('button', 'colorBlack')
colorRainbow.classList.add('button', 'colorRainbow')
colorWhite.classList.add('button', 'colorWhite')
colorErase.classList.add('button', 'colorErase')

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
colorRainbow.textContent = "Rainbow"
colorWhite.textContent = "White"
colorErase.textContent = "Erase"

gridSizeSmall.textContent = "16 x 16"
gridSizeMedium.textContent = "32 x 32"
gridSizeLarge.textContent = "64 x 64"
buttonsMiddleText.textContent = "Choose grid size"

buttonsLeft.appendChild(colorBlack)
buttonsLeft.appendChild(colorWhite)

buttonsRight.appendChild(colorRainbow)
buttonsRight.appendChild(colorErase)

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

const emptyDiv = document.createElement('div');


const gridBlocks = function(x){

    const newGrid = grid.querySelectorAll('div')
    newGrid.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${x} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x} , 1fr)`;

    for (i = 0; i < (x * x); i++){
        let box = document.createElement('div');
        box.classList.add('insideGrid');
        grid.insertAdjacentElement('beforeend', box);
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

const box = document.getElementsByClassName('insideGrid');

const black = function() {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "#000000";
    })
}

black;





