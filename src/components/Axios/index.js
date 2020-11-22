import axios from 'axios'
import React, { useEffect, useState } from 'react'

const instance = axios.create ({
    baseURL: "https://jsonplaceholder.typicode.com"
});

const Axios = () => {
    const [data, setData] = useState([])
 
    useEffect(() => {
      async function getData() {
          const request = await instance.get('/users')
          setData(request.data)
      }
      getData()
    }, [])
  
    return (
      <div>
          Axios
        {data.map((item) => 
          <ul key={item.name} >
            <li >{item.name}</li>
          </ul>
        )}
      </div>
    )
  }
  
  export default Axios;