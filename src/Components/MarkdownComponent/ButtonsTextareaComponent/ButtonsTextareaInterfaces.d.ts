import type React from "react";

interface IMenuMapProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  componentsToMap?: Array<IElementsToMap>;
}

interface IMode {
  mode: string;
}

interface ITextareaButtonsProps extends IMode {
  positions:
    | {startPosition: number | null; endPosition: number | null}
    | undefined;
  SetMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
  markdownState: string;
}

interface IButtonsMapProps extends IMenuMapProps, IMode {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type ClickAction = (args: unknown) => unknown;

interface IElementsToMap {
  element: JSX.Element | string | undefined;
  ClickAction: ClickAction;
  value: string;
}

interface IPreviewButton {
  value: string;
  icon: JSX.Element;
  ClickAction: ClickAction;
  isOnSmallScreen: boolean;
  isOnLargeScreen: boolean;
}
