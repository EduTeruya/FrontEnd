'use strict';

import foods from "./modules/foods.js";

const documentReady = () => {
    foods();
    comidas();

};

document.addEventListener('DOMContentLoaded',documentReady);