import CountryDetail from "./CountryDetail"
import CountryListItem from "./CountryListItem"

const CountryEntity = ({country,handleShow,toggledCountries,isSingleCountryResult}) => {
    console.log('cca3',country.cca3)
    console.log('tc',toggledCountries)

    if ((toggledCountries && toggledCountries.includes(country.cca3)) || isSingleCountryResult) {
        return (
            <div>
                <CountryListItem country={country} handleShow={handleShow} isSingleCountryResult={isSingleCountryResult}/>
                <CountryDetail country={country}/>
            </div>
        )
    } else {
        return <CountryListItem country={country} handleShow={handleShow}/>
    }
}

export default CountryEntity