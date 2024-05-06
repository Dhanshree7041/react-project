// const h1 =document.createElement("h1");
// h1.innerText = "hello world";
// document.body.appendChild(h1);
// console.log("react",React);
// console.log("react dom",ReactDOM);

// const root=document.getElementById('root');

// const heading1= React.createElement("h1",{class:"heading1",style:{backgroundColor:"red"}},'heading1')
// const container1=React.createElement("div",{class:"container1"},heading1)
// console.log(container1);
// const heading2= React.createElement("h3",{class:"heading2",style:{backgroundColor:"yellow"}},'heading2')
// const container2=React.createElement("div",{class:"container2"},heading2)
// const rootElement=ReactDOM.createRoot(root);
// rootElement.render([container1,container2]);

import React from 'react'
import ReactDOM from 'react-dom'


console.log("React",React);
console.log("ReactDom",ReactDOM);

const heading1 = React.createElement("h1",{className:"heading1"},"kolkatta knight riders(kk)");
const heading2 = React.createElement("h3",{className :"heading3"},"Mumbai indians(MI)");

const container1 = React.createElement("div",{className:"container"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container1);