import {type ChangeEventHandler} from "react";

export interface DrawerProps {
  isOpen: boolean;
  Close: ChangeEventHandler<HTMLInputElement>;
}
