import React from 'react';
import CustomNavbar from './components/CustomNavbar'; 
import CustomMain from "./components/CustomMain"; 
import Clock from './components/Clock'; 
import Button from './components/Button';
import Space from "./components/Space";
import Corso from "./components/Corso";
// import Component from "./components/Component";
import './App.css';

function App() {
  return (
    <>
      <CustomNavbar />
      <CustomMain showText={true} />
      <Space />
      <CustomMain imageSrc="/images/foto.jpg" />
      <CustomMain showText={true} />
      <CustomMain imageSrc="/images/bkg_terra.jpg" />
      <Button />
      <Clock />
      <Space />
      <CustomMain showText={true} />
      <Corso/>
      {/* <Component /> */}
    </>
  );
}

export default App;

