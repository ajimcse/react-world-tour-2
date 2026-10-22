import { useEffect, useState } from "react";
import Country from "../Country";
import "./Countrius.css"

const Countries = () => {
  // ১. ডাটা রাখার জন্য স্টেট
  const [countries, setCountries] = useState([]);

  // ২. API থেকে ডাটা ফেচ করা
  useEffect(() => {
    fetch("https://flagdex.net/api/v1/countries-lite.json")
      .then(res => res.json())
      .then(data => setCountries(data)); // <-- console.log এর জায়গায় setCountries হবে
  }, []);

  return (
    <div >
      <h3>React World Tour: {countries.length}</h3>
      <div className="country-container">
        {
          countries.map(country => <Country
            key={country.iso2}
            country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;