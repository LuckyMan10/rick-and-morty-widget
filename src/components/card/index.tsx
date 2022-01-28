import { FC } from "react";
import { StyledCard } from "./style";
import type { card } from "./type";

const Card: FC<card> = ({ image, name }) => {
  return (
    <StyledCard>
      <img className="card-image" src={image} />
      <h3 className="card-name">{name}</h3>
    </StyledCard>
  );
};

export { Card };
