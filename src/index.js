import './css/styles.css';
import _ from 'lodash';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

export const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');

const handler = _.debounce(() => {
    fetchCountries(name).then((response) => {
        return response.json();
    }).then((response) => {
    if (response.length > 10) {
            return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
             }
        response.map((res) => {
        let nameOfficial = res.name.official;
        let capitalsArray = res.capital;
        let population = res.population;
        let flags = res.flags.svg;
        let language = Object.values(res.languages);
    
            if (response.length === 1) {
                list.innerHTML = `
                <li>${nameOfficial}</li>
                <li>
                <img src="${flags}" width="60" height="70" >
                </li>
                <li>${capitalsArray}</li>
                <li>${population}</li>
                <li>${language}</li>
                `} else {
                  list.innerHTML += `
            <li>${nameOfficial}</li>
            <li><img src="${flags}" width="60" height="70" ></li>
            `};
     })   
    }).catch((error) => {
        return Notiflix.Notify.failure('Oops, there is no country with that name')
    })
}, DEBOUNCE_DELAY);

input.addEventListener('input', handler)






