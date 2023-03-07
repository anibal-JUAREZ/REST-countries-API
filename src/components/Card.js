import React from 'react'
import './Card.css';

const Card = (props) => {
  

 const sendInformationHandler =()=>{
    props.changeHideHandler(props);
 }

  return (
    <>
        <div onClick={sendInformationHandler} className={props.isDarkMode ? 'card dark-mode-bc' : 'card'}>
            <img src={props.flag} alt='flag'/>
            <div className='card-information'>
                <h3>{props.name}</h3>
                <p>Population: <span>{props.population.toLocaleString('en')}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
      
    </>
    
  )
}

export default Card;