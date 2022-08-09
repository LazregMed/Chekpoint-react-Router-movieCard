import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({ dataMovie }) => {
    let { id_user } = useParams()
    let filtered = dataMovie.filter(element => element.id == id_user)
    console.log(filtered)
   

        return (
            <div>
                {filtered.map(el => <div>
                    <h1 style={{ color: 'red', display: 'flex', justifyContent: 'center' }} >Title : {el.title}</h1>

                    
                    <h2>Description : {el.description}</h2>
                    <img style={{ display: 'flex', justifyContent: 'center' }} src={el.posterUrl} alt='img' width={300} />
                    <h2> id :{el.id}</h2>

                    

                </div>)}
            </div>
        )
    }
   
    export default Details