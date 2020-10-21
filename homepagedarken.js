
const items = document.querySelectorAll('.itemwrap')

items.forEach(itm => {
    itm.addEventListener('mouseover', () => {
        itm.childNodes[1].classList.add('darken');
    })
    itm.addEventListener('mouseout', () => {
        itm.childNodes[1].classList.remove('darken');
    })
})