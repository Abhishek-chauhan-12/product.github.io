import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState([])
  const [searchtitle, setsearchtitle] = useState('')
  const getapiata = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log('getdata error', err)
      })
  }
  useEffect(() => {
    getapiata()
  }, [])

  return (
    <div>
      <div className="container">
        <input type='text' class="form-control" aria-label="Disabled input example" placeholder="Filter/ Category " onChange={(e) => setsearchtitle(e.target.value)} style={{width:"300px",marginTop:"20px"}} />
        <div className="row g-5  mt-3">
          {data &&
            data.filter((value) => {
              if (searchtitle == "") {
                return value
              } else if (value.category.toLowerCase().includes(searchtitle.toLowerCase())) {
                return value
              }
            }).map((cur, index) => {
              return <Card key={index} curData={cur} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
