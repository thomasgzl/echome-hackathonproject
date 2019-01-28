import React from "react";
import { Media, Container, Row, Col, Button } from "reactstrap";
import "./Forum.css";

const Forum = () => {
  return (
    <Container fluid className="Forum">
      <h2 className="title-forum">Forum</h2>
      <Button className="forum-add-b" color="success"><i className="fas fa-plus-circle"></i>Nouveau sujet</Button>
      <Row className="forum-first">
        <Col lg={10} className="forum-rub">
          <Media>
            <img
              src="../images/forumav3.png"
              alt="avatar"
              className="image-first"
            />
            <Media body>
              <Media heading>Fairphone, une bonne alternative</Media>
              L’année dernière, mon téléphone de la marque Sony a commencé à
              montrer des signes de faiblesse. La mémoire était pleine, je ne
              pouvais plus faire de mises à jour et des bugs de plus en plus
              nombreux sont apparus, malgré les réinitialisations. J’ai donc
              décidé de m’acheter un nouveau téléphone. Cependant, je n’avais
              pas envie de continuer à cautionner une industrie polluante et
              basée sur le profit via l’obsolescence programmée. J'ai opté pour
              le Fairphone 2, il propose des options sympas comme le choix de
              couper les notifications, il a notamment une très bonne autonomie.
              <br />
              <p>
                by <strong>Eve Jackson</strong> - Samedi, 18 decembre 2018,
                23h08
              </p>
            </Media>
          </Media>
          <Button color="primary" className="forum-button">Répondre</Button>
        </Col>
      </Row>
      <Row className="forum-second">
        <Col lg={10} className="forum-rub">
          <Media>
            <img
              src="../images/forumav1.png"
              alt="avatar"
              className="image-first"
            />
            <Media body>
              <Media heading>Sobriété numérique</Media>
              La sobriété numérique ça vous parle ? 3 choses : Acheter les
              équipements les moins puissants possibles, les changer le moins
              souvent possible, et réduire les usages énergivores superflus.....
              Pour en savoir plus suivez ce lien vers mon blog :
              <a href="https://bit.ly/2EDQ3oE">https://bit.ly/2EDQ3oE</a>
              <br />
              <p>
                by <strong>Jean Steven</strong> - Jeudi, 6 octobre 2018, 16h02
              </p>
            </Media>
          </Media>
          <Button color="primary" className="forum-button">Répondre</Button>
        </Col>
      </Row>
      <Row className="forum-third">
        <Col lg={10} className="forum-rub">
          <Media>
            <img
              src="../images/forumav2.png"
              alt="avatar"
              className="image-first"
            />
            <Media body>
              <Media heading>Smartphone Samsung</Media>
              Je vous recommande vivement le galaxy J6 pour son excellente
              autonomie !<br />
              <p>
                by <strong>Mikel Hansson</strong> - Mardi, 23 novembre 2018,
                8h02
              </p>
            </Media>
          </Media>
          <Button color="primary" className="forum-button-last">Répondre</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Forum;
