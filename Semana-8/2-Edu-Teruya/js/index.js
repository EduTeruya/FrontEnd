'use strict';

import header from "./modules/header.js";
import profile from './modules/';

const documentReady = () => {
  header();
  const fetchApi = async () => {
    const response = await fetch('http://127.0.0.1:5501/Semana-8/1-api/json/elliotgaramendi.json');
    const data = await response.json();
    console.log(data);
    profile(data);
  };

  fetchApi();


};

document.addEventListener('DOMContentLoaded', documentReady);