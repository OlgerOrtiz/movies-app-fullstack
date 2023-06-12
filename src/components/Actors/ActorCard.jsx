import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ButtonsEditDelete from '../ButtonsEditDelete';
import { deleteActorThunk } from '../../store/slices/actors.slice';
import formatDate from '../../utils/formatDate';
import './actorCard.css'

const ActorCard = ({ actor, selectActor, showOptions=true }) => {

    const { id, image, firstName, lastName, nationality } = actor;

    const birthday = formatDate(actor.birthday);

    const dispatch = useDispatch();

    return (
        <Col className='card__container'>
            <Card className='card__content'>
                <Card.Img className='card__img' variant="top" src={image}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <div className="flex-fill">
                        <div><b>birthday: </b>{birthday}</div>
                        <div><b>Nationality: </b>{nationality}</div>
                    </div>
                    {
                        showOptions && (
                            <ButtonsEditDelete 
                                onDelete={() => dispatch(deleteActorThunk(id))}
                                onUpdate={() => selectActor(actor)}
                            />
                        )
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ActorCard;