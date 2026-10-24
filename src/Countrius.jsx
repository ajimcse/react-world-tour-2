import { useEffect, useState } from "react";
import Country from "../Country";
import "./Countrius.css"

const Countries = () => {
  // ১. ডাটা রাখার জন্য স্টেট
  const [countries, setCountries] = useState([]);

  const [visitedCountry, SetVisitedCountry] = useState([]);

const handleVisitedCountry = (country)  =>{
 console.log('visited country ')
const newVisitedCountrys =[...visitedCountry, country];
SetVisitedCountry(newVisitedCountrys)
}
  // ২. API থেকে ডাটা ফেচ করা
  useEffect(() => {
    fetch("https://flagdex.net/api/v1/countries-lite.json")
      .then(res => res.json())
      .then(data => setCountries(data)); // <-- console.log এর জায়গায় setCountries হবে
  }, []);

  return (
    <div >
      <h3>React World Tour: {countries.length}</h3>

    <div>
     <h1> Visited Countrius:{visitedCountry.length}</h1>

   {
  visitedCountry.map(country => (
    <div className='countrius-list'key={country.iso2}>
      <h3>{country.name}</h3>
      <img
        src={`https://flagcdn.com/w80/${country.iso2.toLowerCase()}.png`}
        alt={country.name}
        width="80"
      />
    </div>
  ))
}


    </div>

      <div className="country-container">
        {
          countries.map(country => <Country
            key={country.iso2}
           handleVisitedCountry={handleVisitedCountry}
            country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;