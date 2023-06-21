import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Modal, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const PaginaCuDetalii = (props) => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const params = useParams();

  console.log(params);

  return (
    <>
      <Header orders={props.orders} setOrders={props.setOrders} />
      <div className="abs-page">
        <div className="abs-left-content">
          <img style={{ width: '90%', height: '450px', borderRadius: '10px' }} src={"/img/" + params.img} />
        </div>
        <div className="abs-right-content">
          <h1 className="abs-h1">{params.title}</h1>
          <p id="abs-description">{params.desc}</p>
          <div className="abs-line"></div>
          <p className="abs-p">Culoarea</p>
          <button id="abs-black" className="abs-button"></button>
          <button id="abs-white" className="abs-button"></button>
          <button id="abs-red" className="abs-button"></button>
          <div className="abs-line2"></div>
          <div className="abs-price">
            <span className="abs-span">{params.price}$</span>
            <Button onClick={() => setShow(true)} variant='danger' id="abs-btn2" className="abs-button">Comanda acum</Button>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => { setShow(false); setShowAlert(false) }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Comanda Mobila
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: showAlert ? 'block' : 'none' }} className="alert alert-success" role="alert">
            Comanda a fost efectuata cu succes!!!
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Numele</Form.Label>
              <Form.Control required type="email" placeholder="introduceti numele si prenumele" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Adresa</Form.Label>
              <Form.Control required type="email" placeholder="introduceti adresa" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Numarul de telefon</Form.Label>
              <Form.Control required type="email" placeholder="introduceti adresa" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowAlert(true)} variant='danger'>Fa comanda</Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}
