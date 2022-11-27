import React, {useContext} from "react";
import {MovieContext} from './Context'


const Card = () => {

    const {state, dispatch} = useContext(MovieContext)
    return (
         <div>
        {state.movies.map((item,i) => {

            return <div> <h1>Movie Details</h1>
            <p>{item.Title}</p>
            <p>{item.Rating}</p>
            <img src={item.Poster} alt="" /> </div>
        })}
    </div> 
    );
}

export default Card;