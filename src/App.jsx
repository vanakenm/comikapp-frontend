import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import "./App.css";
import Navigation from "./components/NavBar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "Bob", id: 1 });

  return (
    <Container>
      <Navigation user={user} setUser={setUser} />
      <Row>
        <Outlet context={[user, setUser]} />
      </Row>
    </Container>
  );
}

export default App;
