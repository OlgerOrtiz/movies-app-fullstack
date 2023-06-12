import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './movieCard.css'

const MovieCard = ({ movie, selectMovie }) => {

    const { name, image } = movie;

    const isLong = movie.synopsis.length > 120;

    const synopsis = !isLong ? movie.synopsis : movie.synopsis.slice(0, 120)+"..."

    const navigate = useNavigate();

    return (
        <Col className='card__container'>
            <Card className='card'
                onClick={() => navigate(`/movies/${movie.id}`)}
            >
                <Card.Img className='card__img' variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;