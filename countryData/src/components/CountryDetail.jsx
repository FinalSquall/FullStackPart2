import WeatherInfo from './WeatherInfo'

const CountryDetail = ({country}) => {


    console.log('sc_state',country)
    if (!country) {
        return 
    }
    console.log('render_cdetail')
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {console.log('test',country.languages)}
                {console.log('test2',Object.keys(country.languages))}
                {Object.keys(country.languages).map(l => <li key={l}>{country.languages[l]}</li>)}
            </ul>
            <img src={country.flags.png}></img>
            <WeatherInfo country={country}/>
        </div>
    )
}

export default CountryDetail