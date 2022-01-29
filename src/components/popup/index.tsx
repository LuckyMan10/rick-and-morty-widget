import { FC } from "react";
import { Dialog } from "@mui/material";
import { Content } from "./content";
import { popup } from "./type";

const Popup: FC<popup> = ({ isOpen, onClose, character }) => {
  return (
    <Dialog data-testid="dialog" onClose={onClose} open={isOpen}>
      <Content {...character} />
    </Dialog>
  );
};

export { Popup };
