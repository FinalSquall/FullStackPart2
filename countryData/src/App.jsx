import { useState,useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const App = () => {
  const [countrySearch,setCountrySearch] = useState('')
  const [countries,setCountries] = useState([])
  const [toggledCountries,setToggledCountries] = useState([])

  const countryChangeHandler = (event) => {
    console.log(event.target.value)
    setCountrySearch(event.target.value)
    setToggledCountries([])
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => {
      let countryData = response.data
      console.log('search-res',countryData)
      countryData = countryData.filter(c => c.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      if (countryData.length < 10) {
        setCountries(countryData)
      }
    })
  }

  const handleShow = (id) => {
    if (!toggledCountries.includes(id)) {
      const updated = [...toggledCountries,id]
      console.log('sc_id',id)
      setToggledCountries(updated);
      console.log('sc_data',updated)
    }
  }

  console.log('c_size',countries.length)
  return (
    <div>
      find countries <input value={countrySearch} onChange={countryChangeHandler}/>
      <CountryList countries={countries} handleShow={handleShow} toggledCountries={toggledCountries}/>
      {/* <CountryDetail showCountry={showCountry}/> */}
    </div>
  )
}

export default App
