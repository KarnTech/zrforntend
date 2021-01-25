import {useEffect, useState} from 'react'
import {Howl} from 'howler'
import s from './SoundHelix.mp3'
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
    console.log(data)
  }, [])
  
  function playaudio1(){
    let audio  = new Audio(s)
    audio.play()
  }

  function playaudio(){
    var sound = new Howl({
      src: [s]
    });
     
    sound.play();
  }
  return (
    <div className="App">
      {data?.buyprice}
      {console.log(data)}
      <button onClick={() => playaudio()}></button>
      {playaudio1()}
    </div>
  );
}

export default App;
