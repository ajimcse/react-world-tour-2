import "./Country.css"
const Country = ({country}) => {
    const {name, flag,iso3} = country;
    return (
        <div className="country">
          <h2>Name:{name}</h2>
        <img src={`https://flagdex.net${flag}`} alt={name} />
        <p>Code:{iso3}</p>
        <button>Visited</button>
        </div>
    );
};

export default Country;