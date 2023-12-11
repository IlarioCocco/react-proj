import React, { } from "react";

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};
  console.log(app.options);

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value
  console.log('Im here ' + option);
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    // render();
  }
  console.log(app.options);
  // alert('elm insert: ' + app.options);
  // console.log('fornSubmited');
}

// const render = () => {
//    <div className="boxCorso">
//      <section className="section">
//        <h1>{app.title}</h1>
//        {/* <h6>{app.subtitle.toUpperCase()}</h6> */}
//        {app.subtitle
//          ? app.subtitle && <h6>Subtitle: {app.subtitle}</h6> : false}
//        <h6>{app.options.length > 0 ? "In Here view your Options" : "No Options"}</h6>
//        <p>{app.options.length}</p>
//        <ol>
//          <li>Item one</li>
//          <li>Item two</li>
//        </ol>
//        <form onSubmit={onFormSubmit}>
//          <input type="text" name="option" />
//          <button className="button">Add Option</button>
//        </form>
//      </section>
//    </div>
// }

// test
let name = "Ilario";
let lastname = "Cocco";
let profession = "Dev";
let age = 40;
let location = "Sardegna";


const user = {
  name: "Stefano",
  lastname: "Floris",
  age: 35,
  location: "Malesya",
  profession: "Boss",
};




// contatore +1
let count = 0;
console.log("contatotre corso: " + count);
const addOne = () => {
  count++;
  // renderCount(); call the arrow function for a view render
  console.log(count);
};

// contatore -1
console.log("contatotre corso: " - count);
const subtractOne = () => {
  count--;
  // renderCount(); call the arrow function for a view render
  console.log(count);
};

// reset
console.log("reset corso: " + count);
const resetCount = () => {
  count = 0;
  // renderCount(); call the arrow function for a view render
  console.log(count);
};




// if statements
// ternary operators
// logical and operator

// function getLocation(location) {
//     if(location) {
//         return location
//     } else {
//         return 'Sconosciuto';
//     }
// }

function getLocation(location) {
  if (location) {
    return <h6>Location: {location}</h6>;
  }
}
// if location not exist the function getLocation will return undefined



function Corso() {
  return (
    <>
      <h1>Corso React Udemy - Perigea - Novembre 2023</h1>
      <div className="boxCorso">
        <section className="section">
          <h2>
            {name} {lastname}
          </h2>
          <h6>Age: {age}</h6>
          <h6>Location: {location}</h6>
          <h4>Profession: {profession}</h4>
        </section>
      </div>
      
      <div className="boxCorso">
        <section className="section">
          <h2>
            {user.name ? user.name : false} {true ? user.lastname : false}
          </h2>
          {user.age >= 18 && <h6>Age: {user.age}</h6>}
          {/* <h6>Location: {getLocation(user.location).toUpperCase()}</h6> */}
          {getLocation(user.location)}
          {true
            ? user.profession && <h4>Profession: {user.profession}</h4>
            : false}
        </section>
      </div>

      <div className="boxCorso">
        <section className="section">
          <h1>{app.title}</h1>
          {/* <h6>{app.subtitle.toUpperCase()}</h6> */}
          {app.subtitle
            ? app.subtitle && <h6>Subtitle: {app.subtitle}</h6> : false}
          <h6>{app.options.length > 0 ? "In Here view your Options" : "No Options"}</h6>
          <p>{app.options.length}</p>
          <ol>
            <li>Item one</li>
            <li>Item two</li>
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button className="button">Add Option</button>
          </form>
        </section>
      </div>

      {/* const renderCount = () =>{} */}
      <div className="boxCorso section">
        <h1>Count: {count}</h1>
        <button onClick={addOne} className="button">
          +1
        </button>
        <button onClick={subtractOne} className="button">
          -1
        </button>
        <button onClick={resetCount} className="button-reset">
          Reset
        </button>
      </div>
     
    </>
  );
}

export default Corso;


