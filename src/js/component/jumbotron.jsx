import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron m-5 p-3" style={{backgroundColor:'#cbd8f5'}}>
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit aperiam inventore sunt velit! Vero, assumenda beatae aliquid sed quam dolor illo id eius cumque ratione amet voluptatem sint quasi!
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </p>
    </div>
  );
};

export default Jumbotron;
