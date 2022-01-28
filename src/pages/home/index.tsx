import { FC } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "graphql/queries/characters";
import { character } from "type";
import { Card } from "components/card";
import { Popup } from "components/popup";
import { StyledHomePage } from "./style";
import { Loader } from "components/loader";
import { Error } from "components/error";
import { FilterBar } from "components/filterBar";

const Home: FC = () => {
  const defaultVariables = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  };
  const [popup, setPopup] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<character>();
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: defaultVariables
  });
  const cardClickHandler = (character: character) => {
    setCurrentCharacter(character);
    setPopup(true);
  };
  const closePopupHandler = () => {
    setPopup(false);
  };
  const refetchHandler = (values: { [key: string]: string }) => {
    refetch({ ...values });
  };

  const isDataReady = !loading && !error;

  return (
    <StyledHomePage>
      {isDataReady && (
        <div className="homePage">
          <h1 className="homePage__title">Characters widget</h1>
          <FilterBar refetch={refetchHandler} />
          {currentCharacter && (
            <Popup isOpen={popup} onClose={closePopupHandler} character={currentCharacter} />
          )}
          <div className="homePage__cards">
            {data.characters.results.map((character: character, index: number) => {
              return (
                <div onClick={() => cardClickHandler(character)} key={`${character.id}_${index}`}>
                  <Card image={character.image} name={character.name} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {loading && <Loader />}
      {error && <Error />}
    </StyledHomePage>
  );
};

export { Home };
