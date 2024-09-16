import React from "react";

export default function Vans() {
  React.useEffect(function () {
    console.log("Effect ran");
    fetch("/api/vans").then((res) => res.json());
  }, []);

  React.useEffect(function () {
    console.log("Effect ran");
    fetch("/api/vans").then((res) => res.json());
  }, []);

  return <h1>Vans page goes here 🚐</h1>;
}
