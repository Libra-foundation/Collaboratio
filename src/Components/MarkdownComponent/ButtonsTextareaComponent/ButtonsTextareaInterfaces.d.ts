import type React from "react";

interface IMapComponentProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
