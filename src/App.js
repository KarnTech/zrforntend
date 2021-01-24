import {useEffect, useState} from 'react'


function App() {
  const [data, setData] = useState([]);



  useEffect(() => {
    async function fetchdata(){
      const request  =  await fetch(
        '/testfunction'
      )
      var res =  await request.json()
      return setData(res)
    }
    fetchdata()
  }, [])


  function playaudio(){
    let audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')

    audio.play()
  }


  return (
    <div className="App">
    </div>
  );
}

export default App;
