import './index.css';

import numeral from 'numeral';

const formattedValue = numeral(1000).format('#0,0.00');
debugger;
console.log(`The formatted values is ${formattedValue}`);
