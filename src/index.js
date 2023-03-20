import './css/styles.css';
import _ from 'lodash';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
export const input = document.querySelector('#search-box');

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

