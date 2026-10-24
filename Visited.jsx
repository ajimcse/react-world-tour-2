import "./visited.css";
 
const Visited = ({ visitedCountry = [] }) => {
  return (
    <div>
      <h1>Visited Countries: {visitedCountry.length}</h1>

      <div className="visited-Container">
        {visitedCountry.map(country => (
          <div className="visited-card" key={country.iso2}>
            <h3>{country.name}</h3>

            <img
              src={`https://flagcdn.com/w80/${country.iso2.toLowerCase()}.png`}
              alt={country.name}
              width="80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visited;