import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navigation({ user, setUser }) {
  function toggleUser(e) {
    let newUser = {};
    if (user.name == "Bob") {
      newUser.name = "Alice";
      newUser.id = 2;
    } else {
      newUser.name = "Bob";
      newUser.id = 1;
    }
    setUser(newUser);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hack Your Future</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mycomics">Comics</Nav.Link>
            <Nav.Link href="/addcomic">Add Comics</Nav.Link>
            <Button id="basic-nav-dropdown" onClick={(e) => toggleUser(e)}>
              {user.name}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
