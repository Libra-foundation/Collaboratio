import type React from "react";

interface IMenuMapProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  componentsToMap?: Array<IElementsToMap>;
}

interface IElementsToMap {
  element: JSX.Element | string | undefined;
  ClickAction: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface ITextareaButtonsProps {
  mode: string;
  positions:
    | {startPosition: number | null; endPosition: number | null}
    | undefined;
  markdownInput: string;
}

interface IButtonsMapProps extends IMenuMapProps, ITextareaButtonsProps {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface IPreviewButton {
  value: string;
  icon: JSX.Element;
  ClickAction: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => undefined | void;
  isOnSmallScreen: boolean;
  isOnLargeScreen: boolean;
}
