import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


/*const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
/*const a=<h1>
  <ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
    <li>Lemon</li>
  </ul>
</h1>*/
/*const num=5;
let text;
if(num<10){
  text="Hello React";
}else{
  text="something is wrong";
}
const demo=<h1>{text}</h1>;
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(demo);
*/
/*class Car extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h1>This is a {this.props.color}</h1>
  }
}
  const demo=ReactDOM.createRoot(document.getElementById('root'));
  demo.render(<Car color="red"/>);
*/
/*class Car extends React.Component{
  constructor(){
    super();
    this.state={color:"red"};
  }
  render(){
    return <h1>This is a {this.state.color}</h1>
  }
}
  const demo=ReactDOM.createRoot(document.getElementById('root'));
  demo.render(
    <Car/>
  );
*/
class Car extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h1>this is a {this.props.brand}</h1>
  }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand="Mercetiz Benz"/>);