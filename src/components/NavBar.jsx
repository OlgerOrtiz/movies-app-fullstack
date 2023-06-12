import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';
import './navBar.css'

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar className='navBar__container' variant="dark" expand="md">
                <Container >
                    <Navbar.Brand className='logo__text' as={Link} to="/"> <img className='logo' src="../favicon-cine.png" alt="cine logo" />Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='ab' as={Link} to="/">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors">Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors">Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;