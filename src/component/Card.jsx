import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
 

  return (
    <>
      <div className="col-lg-3 col-sm-6 col-12 ms-auto ">
        <div className="card">
          <img
            src={props.curData.image}
            className="card-img-top "
            alt="Abhishek"
          />
          <div className="card-body">
            <p className="card-title">
              <span>Name : </span>
              {props.curData.title.slice(0, 35)}
            </p>
            <p className="card-text">
              <span>Price : </span>
              {props.curData.price}
            </p>
            <div className="row card_button m-0 p-0">
              
              <div className="col-3 p-0">
                <NavLink to={`/details/${props.curData.id}`}>
                  <button className=" btn2 ">DETAILE</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
