import styled from "styled-components";

export const CardLayout = styled.div`
   max-width: 119rem;
   margin: auto;
   padding: 5rem 2rem;
   min-height: calc(100vh - 100px);
   display: grid;
   grid-template-columns: 2fr 8fr;
   grid-gap: 3rem;
   @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .card {
    /* box-shadow: 0 0 6px #888; */
    min-height: 50vh;
  }
  .card__content {
    padding: 1.2rem 2rem 1.2rem 2rem;
  }
  .card__title {
    background-color:white;
    color: black;
    padding: 1.2rem 2rem 1.2rem 2rem;
    font-size: 2rem;
  }
  .card__subtitle {
    font-size: 1.8rem;
    margin: 2rem 0rem;
  }
 .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    margin-top: 2rem;
  }
  .card-btn {
    font-size: 1.6rem;
    border-radius: 25px;
    /* OverRiding index.css styling */
    margin: 0.1rem;
    font-weight: 500;
  }
`;