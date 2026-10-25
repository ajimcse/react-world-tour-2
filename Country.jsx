import { useState } from "react";
import "./Country.css";
import "./Visited"
 

const Country = ({country, handleVisitedCountry, handleVisitedFlage}) => {
    const {name, flag,iso3} = country;
    const [visited, setVisited] = useState(false);

    const  handleVisited = () =>{
        setVisited(!visited)
    }
    // const passWidthParamitar = () =>handleVisitedCountry(country)
    
  
    return (
        <div className={`country ${visited && 'visited'}`}>
          <h2 style={{color: visited? 'Purple': 'black'}}>Name:{name}</h2>
        <img src={`https://flagdex.net${flag}`} alt={name} />
        <p>Code:{iso3}</p>

     <button onClick={handleVisited}>
            {visited ? 'Visited': 'Going'}
        </button>
      <button onClick={() =>handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() =>handleVisitedFlage(country.flag)}>Add Flag</button>
        {
            visited ?'Ami Guri Ai Country': 'Ami Akhno Guri nai'
        }
  
 
        </div>
        
    );
};

export default Country;