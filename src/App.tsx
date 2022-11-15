import React from 'react';
import Dnd from './Dnd';
import './App.css';
import RefHook from './RefHook';
// import Greet from './Greet';
// import Logged from './Logged';



const App=()=>{
  return (
    <>
    <div className="App">
      {/* <Greet styles={{padding:"20px", border:"5px solid red"}} name="Himanshu" /> */}
      {/* <Logged /> */}
      <Dnd />
      {/* <RefHook /> */}
    </div>
    </>
  );
}
export default App;
