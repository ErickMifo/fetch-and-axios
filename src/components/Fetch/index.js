import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [data, setData] = useState([])
  const fetchURL = "https://jsonplaceholder.typicode.com"
  const getData = () =>
    fetch(`${fetchURL}/users`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div>

        Fetch 

      {data.map((item) => 
        <ul key={item.name} >
          <li >{item.name}</li>
        </ul>
      )}
    </div>
  )
}

export default Fetch;