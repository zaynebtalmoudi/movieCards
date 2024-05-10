import React, { useEffect } from 'react'
import './card.css'

export default function AddCard(props) {

    const [newCard, setnewCard] = React.useState({
        newTitle: '',
        newDescription: '',
        newRate: '',
        newImage: '',

    })


    //////////////////////// Image ///////////////////
    const inputRef = React.useRef(null)
    const handleImageClick = () => {
        inputRef.current.click()
    }
    const handleImageChange = (event) => {
        // const file = event.target.files[0].name;
        // console.log(file);
        setnewCard(prevCardData => {
            return {
                ...prevCardData,
                [event.target.name]: event.target.files[0].name
            }

        })
    }

    ///////////////////////////////

    const handleChange = (event) => {
        setnewCard(prevCard => {
            return {
                ...prevCard,
                [event.target.name]: event.target.value
            }
        })
    }


    const handleSaveClick = () => {
        setnewCard({
            newTitle: '',
            newDescription: '',
            newRate: '',
            newImage: '',
        });
        props.handleAddCard(newCard.newTitle, newCard.newDescription, newCard.newRate, newCard.newImage);
        console.log(newCard);

    }





    return (
        <div className='add-card-container'>
            <div className='box-decoration'>
                <div onClick={handleImageClick}>
                    <label htmlFor='image-input' className='image-label'>
                        {
                            newCard.newImage ?
                                <img className='uploaded-image'
                                    src={require(`./images/${newCard.newImage}`)}
                                    name='newImage'
                                    value={newCard.newImage}
                                    alt='' />
                                : <div className='add-image-box'> + Add image</div>
                        }
                    </label>
                    <input type='file'
                        ref={inputRef}
                        name='newImage'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>


                <br />
                <div>

                </div>
                {/* title */}
                <input type='text'
                    placeholder='Title...'
                    onChange={handleChange}
                    value={newCard.newTitle}
                    name='newTitle'
                    className='movie-title'
                    id='title'
                />


                {/* Rate */}

                <select
                    id='rate'
                    value={newCard.newRate}
                    name='newRate'
                    onChange={handleChange}
                >
                    <option > Rate</option>
                    <option value={1}> 1 </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 </option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 </option>
                    <option value={6}> 6 </option>
                    <option value={7}> 7 </option>
                    <option value={8}> 8 </option>
                    <option value={9}> 9 </option>
                    <option value={10}> 10 </option>

                </select>





                {/* Description */}
                {/* <lable htmlFor='description'>Description: </lable> */}
                <textarea
                    rows='10'
                    cols='40'
                    placeholder='Description...'
                    onChange={handleChange}
                    value={newCard.newDescription}
                    name='newDescription'
                    className='movie-description'
                >
                </textarea>
                <br />

                <br />
                <button onClick={handleSaveClick}> Save</button>

            </div>


        </div>

    )
}
// : <img className='upload-image' src={require(`./images/upload.jpeg`)} alt='' />
// src={URL.createObjectURL(newCard.newImage)}
// src={require(`./images/${newCard.newImage}`)}