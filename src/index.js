import './css/styles.css';
import _ from 'lodash';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
export const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');

const handler = _.debounce(() => {

    fetchCountries(name).then((response) => {
    
        return response.json();
    
    }).then((response) => {
        
    if (name === '') {
    input.removeEventListener('input',handler);
        }
    
        response.map((res) => {
        let nameOfficial = res.name.official;
        let capitalsArray = res.capital;
        let population = res.population;
        let flags = res.flags.svg;
            let language = Object.values(res.languages);
            
             if (response.length > 10) {
            return alert('DOKLADNIEJ');
             }
            if (response.length < 2) {
                list.innerHTML = `
                <li>${nameOfficial}</li>
                <li>
                <img src="${flags}" width="60" height="70" >
                </li>
                <li>${capitalsArray}</li>
                <li>${population}</li>
                <li>${language}</li>
                `
            }
            list.innerHTML += `
            <li>${nameOfficial}</li>
            <li><img src="${flags}" width="60" height="70" ></li>
            `

            console.log(res);
     })   
    })
}, DEBOUNCE_DELAY);

input.addEventListener('input', handler)




// const handler = () => {

// }
// input.addEventListener('input', _.debounce(() => {         fetchCountries(name).then((response) => {
    
//         return response.json();
    
//     }).then((response) => {
//         // let nameOfficial = response[0].name.official;
//         // let capital = response[0].capital[0];
//         // let population = response[0].population;
//         // let flags = response[0].flags.svg;
//         // let languagesObj = response[0].languages;
//         // let language = Object.values(languagesObj)[0];

//         response.map((res) => {
//      console.log(res.name.official)
//  })
       
//     })},1000))

