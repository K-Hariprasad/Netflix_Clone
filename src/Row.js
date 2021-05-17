import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Row.css'
const base_url_for_fetch = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchUrl).then(res=>{
            console.table(res.data.results)
            setMovies(res.data.results)
        })
    },[fetchUrl])

    return (
        <div className="row_body">
            <h2>{title}</h2>
            <div className="row_poster_container">
                {movies&&movies.map((item,index)=>(
                    <img key={index} className="row_poster" src={`${base_url_for_fetch}${item.poster_path}`} alt={item.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
 