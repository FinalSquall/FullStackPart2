import CountryEntity from "./CountryEntity"

const CountryList = ({countries,handleShow,toggledCountries}) => {

    if (countries === null) {
        console.log('not_render_cList')
        return
    }
    return (
        <div>
            {countries.map(c => <CountryEntity key={c.cca3} country={c} handleShow={handleShow} toggledCountries={toggledCountries} isSingleCountryResult={countries.length===1}/>)}
        </div>
    )
}

export default CountryList