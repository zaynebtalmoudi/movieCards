
import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <>

            <div className="card">
                <img src={require(`./images/${props.image}`)} alt='poster' />
                <div className="content">
                    <h1 className="name">{props.title}</h1>
                    <h3 className="infos">
                        <i className="fa-solid fa-star"></i>{props.rate}/10
                    </h3>
                    <p className="short-desc">{props.description}</p>
                    {/* <div className="icons">
                        <a href='#'> <i className="fa-solid fa-heart"></i></a>
                        <a href='#'> <i className="fa-solid fa-bookmark"></i></a>
                        <a href='#'> <i className="fa-solid fa-share"></i></a>
                    </div> */}
                </div>
            </div>







        </>

    )
}
