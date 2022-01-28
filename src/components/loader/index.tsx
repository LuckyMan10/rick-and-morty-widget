import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {StyledLoader} from './style';

const Loader: FC = () => {
  return (
    <StyledLoader>
      <div className="loader">
        <CircularProgress />
      </div>
    </StyledLoader>
  );
};

export { Loader };
