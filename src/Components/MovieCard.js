import { Rating } from '@mui/material'
import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({dataMovie}) => {
  return (
    <div>
        <Row style={{width:'18rem', height:'370px',display:'grid',gridTemplateColumns:'auto auto auto',gap:'100px',marginLeft:'200px'}}>
      {dataMovie.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
        <Col>
          <Card>
            <Card.Img style={{width:'18rem',height:'370px'}} variant="top" src={movie.posterUrl} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.description}
              </Card.Text>
              <Rating max={10} name="read-only" value={movie.rating} readOnly />
            </Card.Body>
          </Card>
        </Col>
        </Link>
      ))}
    </Row>
    </div>
  )
}




export default MovieCard