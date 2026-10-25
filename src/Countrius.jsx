import { useEffect, useState } from "react";
import Country from "../Country";
import Visited from "../Visited";
import "./Countrius.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlage]= useState([])
  const handleVisitedCountry = (country) => {
    const alreadyVisited = visitedCountry.some(
      item => item.iso2 === country.iso2
    );

    if (!alreadyVisited) {
      setVisitedCountry([...visitedCountry, country]);
    }
  };

  const handleVisitedFlage = flag =>{
   const newVisitedFalgs =[...visitedFlag, flag]
   setVisitedFlage(newVisitedFalgs)
  }
  useEffect(() => {
    fetch("https://flagdex.net/api/v1/countries-lite.json")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h3>React World Tour: {countries.length}</h3>
       
      <Visited visitedCountry={visitedCountry} />

      <div className="country-container">
        {countries.map(country => (
          <Country
            key={country.iso2}
            country={country}
            handleVisitedFlage={handleVisitedFlage}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
      <div>
    <h4>Visited Flag</h4>
    {
        visitedFlag.map(flag=> <img src={flag}></img>)
    }
  </div>
    </div>
  );
};

export default Countries;