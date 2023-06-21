import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const ShowOrders = (props) => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const summ = props.orders.reduce((prev, elem) => prev + Number(elem.price), 0);
  const onRemoveOrder = (id) => {
    const updatedOrders = props.orders.filter(elem => elem.id !== id);
    props.setOrders(updatedOrders);
  }

  return (
    <>
      <div>
        {props.orders.map(el => (
          <Order onRemove={() => onRemoveOrder(el.id)} key={el.id} item={el} />
        ))}
      </div>
      <div className='d-flex justify-content-between'>
        <h5>Suma: {new Intl.NumberFormat().format(summ)}$</h5>
        <div style={{ marginTop: -10 }}>
          <Button onClick={() => setShow(true)} variant='danger'>Comanda acum</Button>
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
    </>
  )
}


const ShowNothing = () => {
  return (
    <div className='empty'>
      <h2>Cosul este gol</h2>
    </div>
  )
}

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div>
          <Link to={'/'} className='logo'>House staff</Link>
          <ul className='nav'>
            <Link to={'/DespreNoi'} className='link'>Despre noi</Link>
            <Link to={'/Contacte'} className='link'>Contacte</Link>
          </ul>
          <span>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-buttno ${cartOpen && 'active'}`} />
            <Badge className='notification' bg='secondary'>{props.orders.length}</Badge>
          </span>

          {cartOpen && (
            <div className='shop-cart'>
              {props.orders.length > 0 ?
                <ShowOrders setOrders={props.setOrders} orders={props.orders} /> : <ShowNothing />}
            </div>
          )}
        </div>
      </header>

    </>
  )
}

export default Header;