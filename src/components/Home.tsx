import * as React from "react";
import "./../assets/scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ryu from "./../assets/img/ryu.png";
import kanna from "./../assets/img/kanna.jpg";
import hiQ from "./../assets/img/hiQ.jpg";
import { useNavigate } from "react-router-dom";
import AppNavBar from "./NavBar";

function Home() {
  const navigate = useNavigate();
  const goSudo = () => {
    navigate("/menu-sudo");
  };

  const goUso = () => {
    navigate("/menu-uso");
  };

  const goStroop = () => {
    navigate("/menu-stroop");
  };

  const pickRandomGame = () => {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        goUso();
        break;
      case 1:
        goSudo();
        break;
      case 2:
        goStroop();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <AppNavBar />
      <Container className="flex">
        <Row>
          <Col xs={6} className="one">
            <h1 className="header">Knockin' on your noggin</h1>
            <h4>
              Cognitive games created to stimulate brain activity and tracks
              neuro-performance
            </h4>
            <h4 className="randomGame" onClick={pickRandomGame}>
              start random game
            </h4>
          </Col>
          <Col xs={2} className="two">
            <div className="usoLogo" onClick={goUso}>
              !uso
            </div>
            <h5 className="uso" onClick={goUso}>
              !uso
            </h5>
            <h6>train your hand-eye coordination</h6>
          </Col>
          <Col xs={2} className="three">
            <div className="sudoTypeLogo" onClick={goSudo}>
              a = j
            </div>
            <h5 className="sudoType" onClick={goSudo}>
              sudotype
            </h5>
            <h6>train your cognitive skills</h6>
          </Col>
          <Col xs={2} className="four">
            <div className="stroopLogo" onClick={goStroop}>
              red
            </div>
            <h5 className="stroop" onClick={goStroop}>
              stroop
            </h5>
            <h6>train your memory</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
