import React, { useState } from 'react';
// 
import Values from 'values.js';
import SingleColor from './SingleColor';


const App = () => {

 // to take color input from user
 const [color, setColor] = useState('');

 // if user enters a color that doesn't exists
 const [error, setError] = useState(false);

 // to keep the shades of color in the list
 const [list, setList] = useState([]);

 const handleSubmit = (e) => {

  e.preventDefault();
  try{
    let colors = new Values(color).all(10);
    setList(colors);
    console.log(colors);
  }
  catch(error) {
    setError(true);
    console.log(error);
  }

 }

 

 return(
   <>
   <section className='container'>
     <h3>Color Generater</h3>
     {/* take user input */}
        <form onSubmit={handleSubmit}>
          {/* display different border on input box if error is true */}
          <input className={` ${error ? 'error' : null} `} type='text' onChange={(e)=>setColor(e.target.value)} value = {color}/>
          <button type='submit' className='btn'>submit</button>
        </form>
   </section>
   <section className='colors'>
    {
      list.map((color, index)=> {
        return <SingleColor key={index} {...color}/>
      })
    }
   </section>
   
   </>
 );
} 

export default App