import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StartRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} starts</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating size={24} color="red" />
    <Test />
  </React.StrictMode>
);
