import data from "./dataCountry.js";

const tooltip = document.querySelector('.tooltip')
const desc = document.querySelector('.desc')
const frameFrag = document.querySelector('.frame-flag')
const img = tooltip.querySelector('img')
// const imgFrame = frameFrag.querySelector('img')
const map = document.querySelectorAll('.imgWorld path')
const mapLink = document.querySelectorAll('.map_world a')

mapLink.forEach((path, idPath) => {
    path.addEventListener('click', (e) => {
        e.preventDefault()
    })
    path.addEventListener('mouseenter', () => {
        tooltip.classList.add('is-active');
        tooltip.classList.remove('is-closed');
        // frameFrag.classList.add('is-active');
        // frameFrag.classList.remove('is-closed');
        document.addEventListener('mousemove', (e) => {
            if (path.id == "CD" || path.id == "PG") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 12rem;");
            } else if (path.id == "CH") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 14rem;");
            } else if (path.id == "NE") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 11rem;");
            } else {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px;");
            }
            // imgFrame.setAttribute('src', '/src/img/' + path.id.toLowerCase() + '.svg')
            img.setAttribute('src', '/src/img/' + path.id.toLowerCase() + '.svg')
            const n = path.getAttribute('xlink:href');
            desc.innerHTML = `<h3>${n.replace('/', '')}</h3>`
        })
    })
    path.addEventListener('mouseout', () => {
        // imgFrame.setAttribute('src', '')
        tooltip.classList.add('is-closed');
        tooltip.classList.remove('is-active');
        frameFrag.classList.add('is-closed');
        frameFrag.classList.remove('is-active');
    })
})