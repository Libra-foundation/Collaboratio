import {type ChangeEventHandler} from "react";

export interface DrawerProps {
  isOpen: boolean;
  Close: ChangeEventHandler<HTMLInputElement>;
}

export interface DrawerSection {
  readonly SECTION_NAME: string;
  readonly SECTION_ICON: Readonly<JSX.Element>;
}
