import React, {useState} from 'react';
import AllCountries from './AllCountries';
import CountryDescription from './CountryDescription';
import './DarkMode.css'

import './MainPage.css';

export const MainPage = ({getIsDarkMode}) => {

const [hideAllCountries, setHideAllCountries]=useState(true);
const [countryDescription, setCountryDescription] = useState({});
const [isDarkMode, setIsDarkMode]=useState(false);

const bodyElement = document.querySelector("body");

if(isDarkMode){
  bodyElement.style.backgroundColor="rgb(32, 44, 55)";
}else{
  bodyElement.style.backgroundColor="rgb(250, 250, 250)";
}

const changeHideHandler = (country)=>{
  setHideAllCountries(false);
  
  setCountryDescription(country);
 
}

const changeShowHandler=()=>{
  setHideAllCountries(true);
}
  
const changeDarkModeHandler=()=>{
  setIsDarkMode(!isDarkMode);
  getIsDarkMode(!isDarkMode);
}
  return (
    <>
        <div className={isDarkMode ? 'header dark-mode-bc' : 'header'}>
            <h2>Where in the World?</h2>
            <div onClick={changeDarkModeHandler} className='dark-mode'>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z" stroke={isDarkMode ? '#fff' : '#000' } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Dark Mode</p>
            </div>
        </div>
        {hideAllCountries && <AllCountries changeHideHandler={changeHideHandler} isDarkMode={isDarkMode}/>}
        {!hideAllCountries && <CountryDescription changeShowHandler={changeShowHandler} country={countryDescription} isDarkMode={isDarkMode}/>}
        
    </>
    
  )
}
