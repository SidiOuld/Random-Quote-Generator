import React, { useState, useEffect } from "react";
import axios from "axios";
//icons
import {
  FaUndo,
  FaQuoteLeft,
  FaQuoteRight,
  FaRegCopyright,
} from "react-icons/fa";
//styled compoent
import styled from "styled-components";

const Container = styled.div`
  height: 30em;
  border-radius: 0.7em;
  width: 40em;
  margin: 5% auto;
  padding: 5%;
  height: 70vh;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(70, 252, 194, 0.9410981861198738) 100%
  );
  .quote__container {
    height: 80%;
    .quote__top--container {
      display: flex;
      justify-content: center;
    }
    .quote__bottom--container {
      display: flex;
      text-align: right;
      justify-content: right;
      text-align: right;
      h3 {
        margin-left: 70%;
        color: #fff;
        font-family: Dancing Script, cursive;
        font-size: 1.4em;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      }
    }
    h3 {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 1.8em;
      text-align: center;
      font-family: Raleway, sans-serif;
      font-weight: 400;
    }
  }
  .btn {
    height: 20%;
    width: 100%;
  }
  .btn__hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
    height: 30%;
    width: 30%;
    color: white;
    font-size: 2em;
    margin-top: 25px;
  }

  .btn__hvr-grow:hover,
  .btn__hvr-grow:focus,
  .btn__hvr-grow:active {
    transform: scale(1.5);
  }
`;

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.quotable.io/random`)
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getQuote = () => {
    axios
      .get(`https://api.quotable.io/random`)
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div className="quote__container">
        <div className="quote__top--container">
          <h3>
            <span>
              <FaQuoteLeft />
            </span>{" "}
            {quote.content} <FaQuoteRight />
          </h3>
        </div>
        <div className="quote__bottom--container">
          <h3>
            <FaRegCopyright />
            {quote.author}
          </h3>
        </div>
      </div>
      <div className="btn">
        <div className=" btn__hvr-grow">
          <FaUndo onClick={getQuote} />
        </div>
      </div>
    </Container>
  );
};

export default QuoteGenerator;
