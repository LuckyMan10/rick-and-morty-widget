import { FC } from "react";
import { useState, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "graphql/queries/characters";
import { character } from "type";
import { Card } from "components/card";
import { Popup } from "components/popup";
import { StyledHomePage } from "./style";
import { Loader } from "components/loader";
import { Error } from "components/error";
import { FilterBar } from "components/filterBar";
import { graphqlVariables } from "./type";
import { Pagination } from "components/pagination";

const Home: FC = () => {
  const [currentValues, setCurrentValues] = useState<graphqlVariables>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    page: 1
  });

  const [popup, setPopup] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<character>();
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: currentValues
  });
  const cardClickHandler = (character: character) => {
    setCurrentCharacter(character);
    setPopup(true);
  };
  const closePopupHandler = () => {
    setPopup(false);
  };
  const searchHandler = (values: graphqlVariables) => {
    const searchValues = { ...values, page: 1 };
    setCurrentValues(searchValues);
    refetch(searchValues);
  };
  const changePageHandler = (e: ChangeEvent<unknown>, page: number) => {
    refetch({ ...currentValues, page });
    window.scrollTo(0, 0);
  };
  const isDataReady = !loading && !error;
  return (
    <StyledHomePage data-testid="home-page">
      <div className="homePage">
        <h1 className="homePage__title">Characters widget</h1>
        <FilterBar onSubmit={searchHandler} />
        {isDataReady && (
          <div data-testid="homePage-content">
            {currentCharacter && (
              <Popup isOpen={popup} onClose={closePopupHandler} character={currentCharacter} />
            )}
            <div data-testid="homePage-cards" className="homePage__cards">
              {data.characters.results.map((character: character, index: number) => {
                return (
                  <div data-testid="card-wrapper" onClick={() => cardClickHandler(character)} key={`${character.id}_${index}`}>
                    <Card image={character.image} name={character.name} />
                  </div>
                );
              })}
            </div>
            <Pagination pages={data.characters.info.pages} changePageHandler={changePageHandler} />
          </div>
        )}
      </div>
      {loading && <Loader />}
      {error && <Error />}
    </StyledHomePage>
  );
};

export { Home };
