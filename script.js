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

const collorBlack = document.createElement('button')
const collorRainbow = document.createElement('button')
const colorWhite = document.createElement('button')
const colorErase = document.createElement('button')

const buttonsLeft = document.createElement('div')
const buttonsRight = document.createElement('div')
const buttonsMiddle = document.createElement9('div')

buttonsLeft.appendChild(collorBlack)
buttonsLeft.appendChild(collorWhite)

buttonsRight.appendChild(collorRainbow)
buttonsRight.appendChild(collorErase)

buttonsMiddle.appendChild(gridSizeSmall)
buttonsMiddle.appendChild(gridSizeMedium)
buttonsMiddle.appendChild(gridSizeLarge)

gridHeader.appendChild(buttonsLeft)
gridHeader.appendChild(buttonsMiddle)
gridHeader.appendChild(buttonsRight)






