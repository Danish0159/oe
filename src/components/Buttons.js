import React from "react";
import styled from "styled-components";

const Buttons = ({ handleStep, step }) => {
  const steps = [
    "Week 1",
    "Week 2",
  ];

  return (
    <Wrapper>
      {steps.map((label, index) => (
        <button
          key={index}
          className={step === index ? "btn active" : "btn nonActive"}
          onClick={() => handleStep(index)}
        >
          {label}
        </button>
      ))}
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .active {
    color: #f54298;
   }

  .nonActive {
    color: black;
  }
  
  .btn {
    background-color: white;
    text-align: left;
    width: 150px;
    padding: 1.2rem 0.5rem;
    border: none;
    margin: 0.9rem 0rem;
    font-size: 1.7rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
  }
`;
