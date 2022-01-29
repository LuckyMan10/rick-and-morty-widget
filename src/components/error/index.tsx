import { FC } from "react";
import { StyledError } from "./style";

const Error: FC = () => {
  return (
    <StyledError>
      <div className="error">
        <h1 className="error__title">Nothing found</h1>
        <p className="error__message">Try another query.</p>
      </div>
    </StyledError>
  );
};

export { Error };
