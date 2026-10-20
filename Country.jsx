import "./Country.css"
const Country = ({country}) => {
    const {name, flag} = country;
    return (
        <div className="country">
            <h2>Name:{name}</h2>
           <img
  src={`https://flagdex.net${flag}`}
  alt={name}
  width="100"
/>
        </div>
    );
};

export default Country;