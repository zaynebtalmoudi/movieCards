
import './card.css';


import React, { useState } from 'react';
import CardsList from './CardsList';
import Card from './Card';

function App() {

  const [cards, setCards] = React.useState([
    {
      movieTitle: 'Interstellar',
      movieDescription: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      movieRate: '9',
      movieImage: 'interstellar.jpeg',
    },
    {
      movieTitle: 'Inception',
      movieDescription: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
      movieRate: '7',
      movieImage: 'inception.jpeg',
    },
    {
      movieTitle: 'Pride & prejudice',
      movieDescription: 'Elizabeth Bennett is a strong-willed yet sensible young woman. At a local ball, she encounters a wealthy young man, Mr Fitzwilliam Darcy, who is arrogant, and they develop an unusual relationship.',
      movieRate: '8',
      movieImage: 'pride&prejudice.jpeg',
    },

    {
      movieTitle: 'The wonder',
      movieDescription: "Set in The Irish Midlands in 1862, the story follows a young girl who stops eating but remains miraculously alive and well. .",
      movieRate: '7',
      movieImage: 'the wonder.jpeg',
    },
    {
      movieTitle: 'Little women',
      movieDescription: "While the March sisters enter the threshold of womanhood, they go through many ups and downs in life and endeavour.",
      movieRate: '7',
      movieImage: 'little wom.jpeg',
    },
    // {
    //   movieTitle: 'Openheimer',
    //   movieDescription: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.',
    //   movieRate: '6',
    //   movieImage: 'open.jpg',
    // },
    // // {
    //   movieTitle: '',
    //   movieDescription: "",
    //   movieRate: '6',
    //   movieImage: '',
    // },





  ])

  ////////////////////// Filter Start////////////////////
  const [filtered, setFiltered] = React.useState(cards)

  const Filter = (event) => {
    if (event.target.name === 'Title') {
      setFiltered(cards.filter(f => f.movieTitle.toLowerCase().includes(event.target.value)))
    } else if (event.target.name === 'Rate') {
      setFiltered(cards.filter(f => f.movieRate.includes(event.target.value)))
    }
  }////////////////////// Filter End////////////////////


  ////////////////////// add new Movie ////////////////////
  const newCard = {
    movieTitle: 'zayneb',
    movieDescription: '',
    movieRate: '',
    movieImage: ''
  }
  const add = (titleAdded, descriptionAdded, rateAdded, imageAdded) => {
    setFiltered([...filtered, { ...newCard, movieTitle: titleAdded, movieDescription: descriptionAdded, movieRate: rateAdded, movieImage: imageAdded }])
  }////////////////////// add new Movie ////////////////////

  console.log(cards)


  return (

    <div className="App">
      <h1>Movies List</h1>
      <input type='text' onChange={Filter} placeholder='Search by title' name='Title' />
      <input type='text' onChange={Filter} placeholder='Search by Rate' name='Rate' />

      {/*    <label htmlFor='sort'>Sort by</label>

                <select
                  id='sort'
                  onChange={Filter}
                >
                  <option value='title'>Rate - Low to High</option>
                  <option value='title'>Rate - High to Low</option> 



            </select>*/}


      {/* <CardsList  handleAddCards={addCard} /> */}

      <CardsList mesCards={filtered} handleAdd={add} />



    </div >
  );
}

export default App;
