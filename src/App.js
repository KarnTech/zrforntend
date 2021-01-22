import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'




function App() {


  useEffect(async () => {
    const result = await fetch(
      '/testfunction'
    );
 
    console.log(result.json())
  });
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
