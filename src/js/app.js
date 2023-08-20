import data from "./dataCountry.js";
import allDataCrountry from "./allDataCrountry.js";
// allDataCrountry.map((country) => {
//     console.log(country.cca2)
// })
// console.log(allDataCrountry[176]);
const sizeScreen = window.innerWidth;
const tooltip = document.querySelector('.tooltip')
const desc = document.querySelector('.desc')
const frameFrag = document.querySelector('.frame-flag')
const img = tooltip.querySelector('img')
const map = document.querySelectorAll('.imgWorld path')
const mapLink = document.querySelectorAll('.map_world a')

mapLink.forEach((path, idPath) => {
    path.addEventListener('click', (e) => {
        e.preventDefault()
    })
    path.addEventListener('mouseenter', (e) => {
        let pop
        let coatOfArms
        let continents
        let flag
        let capital
        // let languages
        allDataCrountry.map((country) => {
            if (country.cca2 == path.id) {
                pop = country.population
                coatOfArms = country.coatOfArms.svg
                continents = country.continents
                flag = country.flags.svg
                capital = country.capital
                // languages = country.languages
                // console.log(languages.);
            }
        })
        tooltip.classList.add('is-active');
        tooltip.classList.remove('is-closed');
        frameFrag.classList.add('is-active');
        frameFrag.classList.remove('is-closed');
        // img.src = `/src/img/${path.id.toLowerCase()}.svg`
        img.src = flag
        document.addEventListener('mousemove', (e) => {
            if (path.id == "CD" || path.id == "PG") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 12rem;");
            } else if (path.id == "CH") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 14rem;");
            } else if (path.id == "NE") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 11rem;");
            } else if (path.id == "NP") {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px; height: 11rem;");
            } else {
                tooltip.setAttribute('style', 'top:' + (e.pageY - (tooltip.clientHeight) * 1.2) + "px; left:" + (e.pageX - (tooltip.clientWidth / 2)) + "px;");
            }
            if (e.clientX > (sizeScreen - (tooltip.clientWidth / 2))) {
                tooltip.style.translate = `-55% 0`
            }
            if (e.clientX < (tooltip.clientWidth)) {
                tooltip.style.translate = `55% 0`
            }

            // if ((e.clientX + (tooltip.clientWidth / 2)) > (frameFrag.getBoundingClientRect().left)) {
            //     tooltip.style.position = 'fixed'
            // }
            const n = path.getAttribute('xlink:href');
            frameFrag.innerHTML = `<img src=${coatOfArms}>`
            frameFrag.innerHTML += `<h3>${n.replace('/', '')}</h3>`
            frameFrag.innerHTML += `<p>Capital: ${capital}</p>`
            frameFrag.innerHTML += `<p>Population: ${pop}</p>`
            frameFrag.innerHTML += `<p>Continent: ${continents}</p>`
            // frameFrag.innerHTML += `<p>Languages: ${languages}</p>`
        })
    })
    path.addEventListener('mouseout', () => {
        // imgFrame.setAttribute('src', '')
        img.src = ''
        tooltip.classList.add('is-closed');
        tooltip.classList.remove('is-active');
        frameFrag.classList.add('is-closed');
        frameFrag.classList.remove('is-active');
    })
})