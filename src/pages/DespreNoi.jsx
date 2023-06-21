import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const DespreNoi = (props) => {
  return (
    <>
      <Header orders={props.orders} />
      <h1 className='text-center' style={{ marginTop: '70px' }}>Despre Companie</h1>
      <h4 style={{ marginTop: '30px' }} className='text-muted mb-5'>Transformă-ți casa într-un cămin de vis!</h4>
      <div className="d-flex">
        <img style={{ width: '600px', borderRadius: '10px' }} src="./img/blurred-terrace.jpg" alt="" />
        <div className='ms-5'>
          <h2 className='mt-3'>Exploram împreună noi orizonturi în designul și confortul mobilierului</h2>
          <div className='d-flex mt-5'>
            <div className="col1">
              <h1 className='text-danger'>400+</h1>
              <h5>Proiecte finalizate</h5>
            </div>
            <div style={{ marginLeft: '210px' }} className="col2">
              <h1 className='text-danger'>100%</h1>
              <h5>Garanție de satisfacție</h5>
            </div>
          </div>
          <div className='d-flex mt-5'>
            <div className="col1">
              <h1 className='text-danger'>1200</h1>
              <h5>Case transformate</h5>
            </div>
            <div style={{marginLeft: '205px' }} className="col2">
              <h1 className='text-danger'>95%</h1>
              <h5>Clienți mulțumiți</h5>
            </div>
          </div>
        </div>
      </div>
      <h5>House Staff este o companie specializată în furnizarea de personal domestic de înaltă calitate pentru clienți din întreaga lume. Compania are o reputație solidă și este cunoscută pentru abordarea sa profesională și serviciile impecabile.
          Echipa House Staff se angajează să ofere cele mai bune soluții pentru satisfacerea nevoilor clienților săi în ceea ce privește personalul casnic. Compania dispune de o gamă diversificată de personal, inclusiv bucătari, menajere, bone, șoferi, îngrijitori de grădină și multe altele. Fiecare membru al personalului este selectat cu grijă și are experiență relevantă în domeniul lor de expertiză.
          House Staff pune un accent deosebit pe calitatea serviciilor oferite. Toți angajații sunt instruiți să ofere servicii de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Compania colaborează strâns cu clienții pentru a înțelege în detaliu cerințele lor și pentru a asigura o potrivire perfectă între personalul furnizat și nevoile casei respective.
          Confidențialitatea și respectul pentru intimitatea clienților sunt principii fundamentale ale House Staff. Compania pune un accent deosebit pe asigurarea confidențialității datelor personale și a informațiilor despre clienți.
          Cu serviciile lor de încredere și personalizate, House Staff se distinge ca o companie de top în domeniul furnizării de personal domestic de calitate superioară.House Staff este o companie specializată în furnizarea de personal domestic de înaltă calitate pentru clienți din întreaga lume. Compania are o reputație solidă și este cunoscută pentru abordarea sa profesională și serviciile impecabile.
          Echipa House Staff se angajează să ofere cele mai bune soluții pentru satisfacerea nevoilor clienților săi în ceea ce privește personalul casnic. Compania dispune de o gamă diversificată de personal, inclusiv bucătari, menajere, bone, șoferi, îngrijitori de grădină și multe altele. Fiecare membru al personalului este selectat cu grijă și are experiență relevantă în domeniul lor de expertiză.
          House Staff pune un accent deosebit pe calitatea serviciilor oferite. Toți angajații sunt instruiți să ofere servicii de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Compania colaborează strâns cu clienții pentru a înțelege în detaliu cerințele lor și pentru a asigura o potrivire perfectă între personalul furnizat și nevoile casei respective.
          Confidențialitatea și respectul pentru intimitatea clienților sunt principii fundamentale ale House Staff. Compania pune un accent deosebit pe asigurarea confidențialității datelor personale și a informațiilor despre clienți.
          Cu serviciile lor de încredere și personalizate, House Staff se distinge ca o companie de top în domeniul furnizării de personal domestic de calitate superioară.House Staff este o companie specializată în furnizarea de personal domestic de înaltă calitate pentru clienți din întreaga lume. Compania are o reputație solidă și este cunoscută pentru abordarea sa profesională și serviciile impecabile.
          Echipa House Staff se angajează să ofere cele mai bune soluții pentru satisfacerea nevoilor clienților săi în ceea ce privește personalul casnic. Compania dispune de o gamă diversificată de personal, inclusiv bucătari, menajere, bone, șoferi, îngrijitori de grădină și multe altele. Fiecare membru al personalului este selectat cu grijă și are experiență relevantă în domeniul lor de expertiză.
          House Staff pune un accent deosebit pe calitatea serviciilor oferite. Toți angajații sunt instruiți să ofere servicii de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Compania colaborează strâns cu clienții pentru a înțelege în detaliu cerințele lor și pentru a asigura o potrivire perfectă între personalul furnizat și nevoile casei respective.
          Confidențialitatea și respectul pentru intimitatea clienților sunt principii fundamentale ale House Staff. Compania pune un accent deosebit pe asigurarea confidențialității datelor personale și a informațiilor despre clienți.
          Cu serviciile lor de încredere și personalizate, House Staff se distinge ca o companie de top în domeniul furnizării de personal domestic de calitate superioară.House Staff este o companie specializată în furnizarea de personal domestic de înaltă calitate pentru clienți din întreaga lume. Compania are o reputație solidă și este cunoscută pentru abordarea sa profesională și serviciile impecabile.
          Echipa House Staff se angajează să ofere cele mai bune soluții pentru satisfacerea nevoilor clienților săi în ceea ce privește personalul casnic. Compania dispune de o gamă diversificată de personal, inclusiv bucătari, menajere, bone, șoferi, îngrijitori de grădină și multe altele. Fiecare membru al personalului este selectat cu grijă și are experiență relevantă în domeniul lor de expertiză.
          House Staff pune un accent deosebit pe calitatea serviciilor oferite. Toți angajații sunt instruiți să ofere servicii de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Compania colaborează strâns cu clienții pentru a înțelege în detaliu cerințele lor și pentru a asigura o potrivire perfectă între personalul furnizat și nevoile casei respective.
          Confidențialitatea și respectul pentru intimitatea clienților sunt principii fundamentale ale House Staff. Compania pune un accent deosebit pe asigurarea confidențialității datelor personale și a informațiilor despre clienți.
          Cu serviciile lor de încredere și personalizate, House Staff se distinge ca o companie de top în domeniul furnizării de personal domestic de calitate superioară.</h5>

      <Footer />
    </>
  )
}