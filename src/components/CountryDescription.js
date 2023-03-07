import React from 'react'
import BorderLabel from './BorderLabel';
import './CountryDescription.css';
import './DarkMode.css';
const CountryDescription = ({changeShowHandler, country, isDarkMode}) => {

    const goBackHandler = ()=>{
        changeShowHandler();
    }
    
    let languages="";
    let currencies="";
    let topLevelDomain="";
    country.languages.forEach(language=>{
        languages = languages + language.name + ", ";
    })
    
    country.currencies.forEach(currency=>{
        currencies = currencies + currency.name + ", ";
    })
    
    country.topLevelDomain.forEach(topLevel=>{
        topLevelDomain = topLevelDomain + topLevel + ", ";
    })
  return (
    <div  className='country-detail'>
        <div onClick={goBackHandler} className={isDarkMode ? 'back-button dark-mode-bc' :'back-button'}>
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L20 12" stroke={isDarkMode ? '#fff' : '#000' } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18" stroke={isDarkMode ? '#fff' : '#000' } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
        <p>Back</p>  
        </div>

        <div className='country-card'>
            <img src={country.flag} alt='flag'/>
            <div className={isDarkMode ? 'country-card-information dark-mode-color' : 'country-card-information'}>
                <h3>{country.name}</h3>
                <div>
                    <section>
                        <p>Native Name: <span>{country.nativeName}</span></p>
                        <p>Population: <span>{country.population.toLocaleString('en')}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Sub Region: <span>{country.subregion}</span></p>
                        <p>Capital: <span>{country.capital}</span></p>
                    </section>
                    <section>
                        <p>Top Level Domain: <span>{topLevelDomain.slice(0, -2)}</span></p>
                        <p>Currencies: <span>{currencies.slice(0,-2)}</span></p>
                        <p>Languages: <span>{languages.slice(0,-2)}</span></p>
                    </section>
                    
                </div>
                {country.borders && <div className='borders'>
                    <p>Border Countries:</p>
                    {country.borders.map((border, index)=>(
                        <BorderLabel index ={index} border={border} isDarkMode={isDarkMode}/>
                    ))}
                </div>}
            </div>
        </div>   
    </div>
    
  )
}

export default CountryDescription;