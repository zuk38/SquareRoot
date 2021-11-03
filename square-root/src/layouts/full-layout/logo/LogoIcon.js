import React from 'react';
import { useSelector } from 'react-redux';
import logoSM from "../../../assets/images/logos/logo-is-dark-cc-small.png";

const LogoIcon = () => {
  const customizer = useSelector((state) => state.CustomizerReducer);
  return (
    <img src={logoSM} width={180}></img>
  );
};

export default LogoIcon;
