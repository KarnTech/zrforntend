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
    console.log(data)
  }, [])

  return (
    <div className="App">
      {data?.buyprice}
    </div>
  );
}

export default App;
