import React from 'react';
import { Container } from 'react-bootstrap';

export default  function App(props) {
  return (
    <footer className="bg-dark py-4 mt-auto sticky-bottom">
        <Container>
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Cms2023</div></div>
            <div className="col-auto">
              {/* <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
              <span className="text-white mx-1">&middot;</span> */}
              <a className="link-light small" href="#!">Contactez-nous</a>
            </div>
          </div>
        </Container>
      </footer>
  )
}