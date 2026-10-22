import { useState } from "react";
import "./Country.css"
const Country = ({country}) => {
    const {name, flag,iso3} = country;
    const [visited, setVisited] = useState(false);

    const  handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
          <h2 style={{color: visited? 'Purple': 'black'}}>Name:{name}</h2>
        <img src={`https://flagdex.net${flag}`} alt={name} />
        <p>Code:{iso3}</p>
        <button onClick={handleVisited}>Visited</button>
        {
            visited ?'Ami Guri Ai Country': 'Ami Akhno Guri nai  Country '
        }
        </div>
    );
};

export default Country;