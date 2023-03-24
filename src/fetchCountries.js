import { input } from "./index";

export const fetchCountries = (name) => {

    name = `${input.value}`.trim();
    const countries = fetch('https://restcountries.com/v3.1/name/' + `${name}` + '?fields=name,capital,population,flags,languages');
    
    return countries;
}

