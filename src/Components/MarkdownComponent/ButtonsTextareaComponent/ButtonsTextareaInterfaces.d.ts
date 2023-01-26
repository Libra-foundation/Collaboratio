import type React from "react";

interface IMenuMapProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  componentsToMap?: Array<{element: JSX.Element | string | undefined}>;
}

interface ITextareaButtonsProps {
  mode: string;
}

interface IButtonsMapProps extends IMenuMapProps {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  mode: string;
}
