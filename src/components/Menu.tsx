/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "bootstrap";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/scss/Menu.css";
import styled from "styled-components";
import { Component } from "react";

const Menu: React.FC<any> = (props) => {
// function Menu(props) {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col" id="left">
            <h1>{props.title}</h1>
            <button className="btn">Play game :3</button>
          </div>
          <div className="col" id="right">
            <h3>About this test</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
