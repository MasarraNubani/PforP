import { createElement, createImage } from '../src/utilityRenderFunctions.js';

const div = createElement('div', 'مرحبا!');
document.body.appendChild(div);

const img = createImage('https://placekitten.com/100/100', 'صورة قطوطة');
document.body.appendChild(img);
