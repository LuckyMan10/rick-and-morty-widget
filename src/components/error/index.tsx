import { FC } from "react";
import { StyledError } from "./style";

const Error: FC = () => {
  return (
    <StyledError>
      <div className="error">
        <h1>Error!</h1>
        <p>Please, reload the page.</p>
      </div>
    </StyledError>
  );
};

export { Error };
