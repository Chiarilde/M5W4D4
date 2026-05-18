import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../context/Context";

const MyNav = ({ searchBook, setSearchBook }) => {
    const { theme, toggleTheme } = useContext(Context);

    return (
        <Navbar
            expand="lg"
            className="mb-3"
            bg={theme === "dark" ? "dark" : "primary"}
            data-bs-theme={theme === "dark" ? "dark" : "light"}
        >
            <Container fluid>
                <Navbar.Brand href="#">EpiBooks</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto d-flex align-items-center gap-2">
                        <Form.Group>
                            <Form.Control
                                type="search"
                                placeholder="Cerca un libro"
                                value={searchBook}
                                onChange={(e) => setSearchBook(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant={
                                theme === "dark"
                                    ? "outline-light"
                                    : "outline-dark"
                            }
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
