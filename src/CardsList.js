import React from 'react'
import Card from './Card'
import AddCard from './AddCard'
import './card.css'


export default function CardsList(props) {


    const finalList = props.mesCards.map(card => (
        <Card
            title={card.movieTitle}
            description={card.movieDescription}
            rate={card.movieRate}
            image={card.movieImage}
        />
    ))



    return (

        <>
            <div className='container'>
                <div className='movie-cards'>
                    {finalList}
                </div>
            </div>
            <AddCard handleAddCard={props.handleAdd} />
        </>
    )
}
