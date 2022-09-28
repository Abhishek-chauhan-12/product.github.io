import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
  const { id } = useParams()
  const [resData, setResdata] = useState([])
  const getdata = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setResdata(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log('getdat', err)
      })
  }
  
  useEffect(() => {
    getdata()
  }, [])
  
  return (
    <div>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 col-12  left_box">
            <img src={resData.image} alt="" />
          </div>
          <div className="col-lg-6 col-12  rigth_box">
            <table>
              <tr>
                <td>
                  <span>Name </span>
                </td>
                <td>{resData.category}</td>
              </tr>
              <tr>
                <td>
                  <span>Description </span>
                </td>
                <td>{resData.description}</td>
              </tr>
              <tr>
                <td>
                  <span>Title </span>
                </td>
                <td>{resData.title}</td>
              </tr>
              <tr>
                <td>
                  <span>Price </span>
                </td>
                <td>{resData.price}</td>
              </tr>
              <tr>
                <td>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
