import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from '../../theme-context';
import ButtonTheme from './Button';
import Three from './three';

export default function Header(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <header className=" py-5" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Container>
        <Row className="gx-5 align-items-center justify-content-center">
          <Col lg={8} xl={7} xxl={6}>
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder mb-2">
              Créez des articles en un clin d'œil avec CMS.
              </h1>
              <p className="lead  fw-normal  mb-4">
                Simplicité, flexibilité, puissance : donnez vie à votre vision du contenu web
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                {/* <Button className="btn btn-primary btn-lg px-4 me-sm-3" href={props.LinkSignIn}>
                  Démarrer
                </Button> */}
                <Button className="btn btn-primary btn-lg px-4 me-sm-3" href="http://localhost:8000/user/login">
                  Démarrer
                </Button>
                <ButtonTheme />
                
              </div>
            </div>
          </Col>
          <Col xl={5} xxl={6} className="d-none d-xl-block text-center p-0">
            <Three></Three>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

