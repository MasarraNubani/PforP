import { createElement, createImage } from '../src/utilityRenderFunctions.js';

console.log(createElement('div', 'Hello')); // لازم يعطيك عنصر <div>Hello</div>
console.log(createImage('img.png', 'test')); // لازم يعطيك عنصر <img src="img.png" alt="test">
