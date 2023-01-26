import type React from "react";

interface IMapMenuProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface ITextareaButtonsProps {
  mode: string;
}

interface IButtonsMapProps {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  mode: string;
}
