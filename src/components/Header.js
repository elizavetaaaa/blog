import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <div>
            <Header bg="light" expand="lg">
                <Container>
                    <Header.Brand href="/">BLOG</Header.Brand>
                    <Header.Toggle aria-controls="basic-navbar-nav" />
                    <Header.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Posts</Nav.Link>
                            <Nav.Link href="/new-post">New Post</Nav.Link>
                        </Nav>
                    </Header.Collapse>
                </Container>
            </Header>

        </div>
    );
};

export default Header;