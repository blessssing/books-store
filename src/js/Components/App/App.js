import React, { useEffect } from "react";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "@reducers/booksSlice";
import { fetchBooks } from "@reducers/booksSlice";

const StyledWrapperCentered = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
`;

const WrapperApp = (props) => {
  return <StyledWrapperCentered {...props} />;
};

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log("books ", books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <WrapperApp>
      <HeaderSection />
      <MainMenu />
    </WrapperApp>
  );
};

export default App;
