import { FC } from "react";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { pagination } from "./type";
import { StyledPagination } from "./style";

const Pagination: FC<pagination> = ({ pages, changePageHandler }) => {
  return (
    <StyledPagination>
      <Stack spacing={2}>
        <MuiPagination onChange={changePageHandler} count={pages} color="primary" />
      </Stack>
    </StyledPagination>
  );
};

export { Pagination };
