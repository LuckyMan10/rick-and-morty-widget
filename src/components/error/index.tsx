import { FC } from "react";
import { StyledError } from "./style";

const Error: FC = () => {
  return (
    <StyledError>
      <div className="error">
        <h1>Nothing found</h1>
        <p>Try another query.</p>
      </div>
    </StyledError>
  );
};

export { Error };
