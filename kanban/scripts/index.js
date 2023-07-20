const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.cards')
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})
function dragstart() {
    // log('CARD: Start dragging')
    this.classList.add('is-dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
}
function drag() {
    // log('CARD: Is dragging')
}
function dragend() {
    // log('CARD: Stop dragging')
    this.classList.remove('is-dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
}
function dragenter() {
    // log('DROPZONE: Entered the zone')
}
function dragover() {
    // log('DROPZONE: Is over the zone')
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}
function dragleave() {
    // log('DROPZONE: Leaved the zone')
    this.classList.remove('over')
}
function drop() {
    // log('DROPZONE: Dropped in the zone')
    this.classList.remove('over')
}
function log(message) {
    console.log(`> ${message}`)
}