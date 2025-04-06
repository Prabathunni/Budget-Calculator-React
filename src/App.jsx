import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[price,setPrice]=useState(0)
  const[discount,setDiscount]=useState(0)

  const[afterprice,setAfterprice]=useState(0)
  const[saved,setSaved]=useState(0)

  function calculate(){
    
    const savedoutput = (price*discount/100)
    const afterpriceoutput = (price-savedoutput)

    setAfterprice(afterpriceoutput)
    setSaved(savedoutput)  

  }

  const reset =()=>{
    setPrice(0)
    setDiscount(0)
    setAfterprice(0)
    setSaved(0)
  }
  

  return (
    <>
      <div className="container">
        <h1 className="heading">Discount Calculator</h1>

        <div className="content">
          <div className="inputdiv">
            <form className="form">
              <TextField id="outlined-basic" label="Price Before Discount" value={price || "" } variant="outlined" onChange={(e)=>setPrice(e.target.value)} />
              <TextField id="outlined-basic" label="Discount %" value={discount || ""} variant="outlined" onChange={(e)=>setDiscount(e.target.value)} />
              <Button variant="contained" color="primary" onClick={calculate}>
                Calculate
              </Button>
              <Button variant="contained" color="warning" onClick={reset}>
                Reset
              </Button>
            </form>
          </div>

          <div className="outputdiv">
            <div className="outputbox">
              <h2 className="output-title">Price After Discount</h2>
              <p className="output-value">₹ {afterprice}</p>
            </div>

            <div className="outputbox">
              <h2 className="output-title">You Saved</h2>
              <p className="output-value">₹ {saved}</p>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
