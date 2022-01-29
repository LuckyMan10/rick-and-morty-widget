import { ChangeEvent } from "react";

export type pagination = {
  pages: number;
  changePageHandler(e: ChangeEvent<unknown>, page: number): void;
};
