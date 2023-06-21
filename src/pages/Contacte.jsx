import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const Contacte = (props) => {
  const mapState = {
    center: [47.7616, 27.9282],
    zoom: 12,
  };

  const placemarkGeometry = [47.7616, 27.9282];
  const placemarkProperties = {
    iconContent: '',
    hintContent: 'Orașul Bălți, Republica Moldova',
  };

  return (
    <>
      <Header orders={props.orders} />
      <div className="contact-container">
        <h1 className='d-flex justify-content-center'>Contacte</h1>
        <div className="contact-box">
          <div className="instagram">
            <a href="https://www.instagram.com"><img style={{ marginLeft: '20px' }} src="./contact icon/free-icon-instagram-1384063.png" alt="" /></a>
            <h4 className='mb-3'>Instagram</h4>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com"><img style={{ marginLeft: '20px' }} src="./contact icon/premium-icon-facebook-3128304.png" alt="" /></a>
            <h4 className='mb-3'>Facebook</h4>
          </div>
          <div className="gmail">
            <a href="https://mail.google.com"><img className='ms-1' src="./contact icon/free-icon-gmail-5968534.png" alt="" /></a>
            <h4 className='mb-2'>Gmail</h4>
          </div>
          <div className="location">
            <a href="#"><img style={{ marginLeft: '10px' }} src="./contact icon/placeholder.png" alt="" /></a>
            <h4>Adresa</h4>
          </div>
        </div>
        <hr />
        <YMaps>
          <div>
            <Map state={mapState} width="100%" height={400}>
              <Placemark geometry={placemarkGeometry} properties={placemarkProperties} />
            </Map>
          </div>
        </YMaps>
      </div>
      <Footer />
    </>
  )
}