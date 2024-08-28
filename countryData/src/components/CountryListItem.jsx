const CountryListItem = ({country,handleShow,isSingleCountryResult}) => {
    if (!isSingleCountryResult) {
        /* I do assume that I dont need to worry about hiding them again. Typing a new search effectively resets this */
        return <p key={country.cca3}>{country.name.common} <button onClick={() => handleShow(country.cca3)}>show</button></p>
    }
}

export default CountryListItem