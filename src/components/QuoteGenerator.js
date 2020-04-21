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
  background-color: purple;
  .quote {
    .quote__top--container {
      display: flex;
      justify-content: center;

      }
    }
    .quote__bottom--container {
        display: flex;
        border: 2px solid black;
        text-align: right;
        justify-content: right;
        h3{
            margin-left: 20px;
        }
      }
  }
  h3{
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
    color: #fff;
    font-size: 1.8em;
    font-family: Raleway,sans-serif;
    font-weight: 400;
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
      <div className="quote">
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
      <div className="btn btn__hvr-grow">
        <FaUndo onClick={getQuote} />
      </div>
    </Container>
  );
};

export default QuoteGenerator;
