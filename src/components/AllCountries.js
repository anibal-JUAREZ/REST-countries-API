import React, {useState, useEffect} from 'react';
import './AllCountries.css';
import Card from './Card';
import './DarkMode.css';
const AllCountries = ({changeHideHandler, isDarkMode}) => {

  const [allCountries, setAllCountries] = useState([]);
  const [countryCopy, setCountryCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        setAllCountries(data);
        setCountryCopy(data);
      });
  },[])

  const getCountryHandler = (e)=>{
    const filterCountry = countryCopy.filter(country=>country.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (filterCountry.length === 0){
      setIsLoading(false);
    }else{
      setIsLoading(true);
      
    }
    setAllCountries(filterCountry);
 }

  const changeRegionHandler=(e)=>{
    const filterCountry = countryCopy.filter(country=>country.region ===e.target.value);
    setAllCountries(filterCountry);
    if(!e.target.value){
      setAllCountries(countryCopy);
    }
  }
    
  return (
    <>
        <div className='search'>
            <div className={isDarkMode? 'search-button dark-mode-bc':'search-button'}>
                <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill={isDarkMode ? '#fff':"#000"} /></svg>
                <input className={isDarkMode? "dark-mode-color" : ""} onChange={getCountryHandler} type="text" placeholder='Search for a country...'/>
            </div>
            <select onChange={changeRegionHandler} className={isDarkMode?'filter dark-mode-bc':'filter'} name="region" id="region">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div  className='show-all-countries'>
          {
            allCountries.length > 0 ? allCountries.map((oneCountry, index)=>(
                <Card
                    key={index}
                    population={oneCountry.population}
                    region={oneCountry.region}
                    capital={oneCountry.capital}
                    flag={oneCountry.flags.png}
                    name={oneCountry.name}
                    nativeName={oneCountry.nativeName}
                    subregion={oneCountry.subregion}
                    topLevelDomain={oneCountry.topLevelDomain}
                    currencies={oneCountry.currencies}
                    languages={oneCountry.languages}
                    borders={oneCountry.borders}
                    changeHideHandler={changeHideHandler}
                    isDarkMode={isDarkMode}
                   
                />
            )) : <p className={isDarkMode ? 'no-country dark-mode-color' : 'no-country'}>{isLoading ? "Loading" : "No country found"}</p> 
          }
        </div>
        
    </>
  )
}


export default AllCountries;