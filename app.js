import  React from 'react';
import  ReactDOM  from 'react-dom/client';

const h1Elem = React.createElement("h1", {id: "code"}, "Welcome to new Booking APP");
const rootElem = ReactDOM.createRoot(document.getElementById("main"));
rootElem.render(h1Elem);

console.log(h1Elem)
