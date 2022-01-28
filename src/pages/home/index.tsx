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

const Home: FC = () => {
  const page = 1;
  const [popup, setPopup] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<character>();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page }
  });
  const cardClickHandler = (character: character) => {
    setCurrentCharacter(character);
    setPopup(true);
  };
  const closePopupHandler = () => {
    setPopup(false);
  };

  const isDataReady = !loading && !error;

  return (
    <StyledHomePage>
      {isDataReady && (
        <div className="homePage">
          <h1 className="homePage__title">Characters widget</h1>
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
