import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react'
import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index}) => {
    const[alert, setAlert] = useState(false);
    useEffect(()=>{
      const timeOut = setTimeout(()=>{
        setAlert(false);
      },3000)
    return ()=> clearTimeout(timeOut);
    }, [alert])

    // convert array rgb to string
    const bcg = rgb.join(",");
    const hex = rgbToHex(...rgb);
    const hexValue = `${hex}`
    console.log(bcg);
  return (
    <>
    <article className = {`color ${index > 10 && 'color-light'}` } style ={{backgroundColor:`rgb(${bcg})`}}
    onClick= {()=>{
      setAlert(true);
      // copy hexValue to keyboard
      navigator.clipboard.writeText(hexValue);

    }}>
       <p className = 'percent-value'>{weight}%</p>
       <p className='color-value'>{hexValue}</p>
       {alert && <p className='alert' >copied to clipboard</p>}
    </article>
    </>
  )
}

export default SingleColor;