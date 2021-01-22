import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'




function App() {
  const [data, setData] = useState(null);


  useEffect(async () => {
    const result = await fetch(
      '/testfunction'
    );
 
    let res  =  await result.json()
      setData(res)
  });
  return (
    <div className="App">
      {data.currentstatus}
    </div>
  );
}

export default App;
