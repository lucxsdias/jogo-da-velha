import './style.css'

const boardElement = document.querySelector('#board')

for (let position = 1; position <= 9; position++) {

  const cellElement = document.createElement('button')

  cellElement.type = 'button'
  cellElement.classList.add('cell')

  cellElement.addEventListener('click', () => {
    cellElement.textContent = 'X'
  })
  boardElement.appendChild(cellElement)
}
