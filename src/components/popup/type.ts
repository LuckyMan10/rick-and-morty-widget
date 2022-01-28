import { character } from "type";

export type popup = {
  isOpen: boolean;
  onClose(): void;
  character: character;
};
