import type React from "react";

interface IMenuMapProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  HandleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  componentsToMap?: Array<IElementsToMap>;
}

interface IElementsToMap {
  element: JSX.Element | string | undefined;
  ClickAction: ClickAction;
}

interface IMode {
  mode: string;
}

interface ITextareaButtonsProps extends IMode {
  positions:
    | {startPosition: number | null; endPosition: number | null}
    | undefined;
  markdownInput: string;
  SetMarkdownInput: () => void;
}

interface IButtonsMapProps extends IMenuMapProps, IMode {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type ClickAction1 = () => undefined;
type ClickAction2 = (
  event: React.MouseEvent<HTMLElement, MouseEvent>
) => undefined | void;
type ClickAction3 = (
  event: React.MouseEvent<HTMLElement, MouseEvent>
) => string | undefined;
type ClickAction = ClickAction1 | ClickAction2 | ClickAction3;

interface IPreviewButton {
  value: string;
  icon: JSX.Element;
  ClickAction: ClickAction;
  isOnSmallScreen: boolean;
  isOnLargeScreen: boolean;
}
