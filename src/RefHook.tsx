import React, { useState,useRef, useEffect } from 'react'

const RefHook = () => {
    const [inputValue, setinputValue]=useState("");
    console.log(inputValue);
    const previousValue = useRef("")
    

    useEffect(()=>{
        previousValue.current= inputValue;
    },[inputValue])
  return (
    <>
    <input type="text" value={inputValue} onChange={ (e)=>{
        setinputValue(e.target.value);
    }} />
    <h2>Current Value: {inputValue} </h2>
    <h2>Previous Value: {previousValue.current} </h2>
    </>
  )
}

export default RefHook