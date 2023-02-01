import React from "react";
import {ToggleButtonGroup} from "@mui/material";
import ButtonsMapComponent from "./ButtonsMapComponent/ButtonsMapComponent";
import {
  type IElementsToMap,
  type ITextareaButtonsProps,
} from "./ButtonsTextareaInterfaces";
import MenuMapComponent from "./MenuMap/MenuMapComponent";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";

interface IMenuState {
  title: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
  codeSnippet: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
  optionsMenu: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
}

export default function TextareaButtonsComponent(
  props: ITextareaButtonsProps
): JSX.Element {
  const {mode, positions, SetMarkdownInput, markdownState} = props;

  const InsertTitle = (value: unknown): void => {
    let level: number;
    switch (value) {
      case "Title 1":
        level = 1;
        break;
      case "Title 2":
        level = 2;
        break;
      case "Title 3":
        level = 3;
        break;
      case "Title 4":
        level = 4;
        break;
      case "Title 5":
        level = 5;
        break;
      case "Title 6":
        level = 6;
        break;
      default:
        level = 0;
        console.log("Title level wasn't found");
    }
    if (
      positions?.startPosition !== null &&
      positions?.endPosition !== null &&
      positions !== undefined
    ) {
      const INDEXES: Array<number> = [];
      let a: number = 0;
      while (markdownState.includes("\n", a)) {
        const NEXT_INDEX: number = markdownState.indexOf("\n", a);
        INDEXES.push(NEXT_INDEX);
        a = NEXT_INDEX + 1;
      }
      if (INDEXES.length === 0) {
        SetMarkdownInput((prev_state) =>
          (level > 1 ? String("#".repeat(level)) : "# ").concat(
            prev_state.slice(prev_state.lastIndexOf("#") + 1, prev_state.length)
          )
        );
      } else if (INDEXES.length !== 0) {
        for (let i: number = 0; i <= INDEXES.length - 1; i++) {
          if (
            INDEXES[i] < positions.startPosition &&
            (INDEXES[i + 1] === undefined
              ? true
              : positions.endPosition < INDEXES[i + 1])
          ) {
            SetMarkdownInput((prev_state) =>
              prev_state
                .slice(0, INDEXES[i] + 1)
                .concat(level > 1 ? String("#".repeat(level)) : "# ")
                .concat(
                  prev_state.slice(
                    prev_state
                      .slice(
                        INDEXES[i],
                        INDEXES[i + 1] !== undefined
                          ? INDEXES[i + 1]
                          : prev_state.length
                      )
                      .lastIndexOf("\n") +
                      INDEXES[i] +
                      1 +
                      level,
                    prev_state.length
                  )
                )
            );
          }
        }
      }
    }
  };

  const [OPEN_AND_ANCHOR, SetOpenAndAnchor] = React.useState<IMenuState>({
    title: {
      anchorEl: null,
      isOpen: false,
    },
    codeSnippet: {
      anchorEl: null,
      isOpen: false,
    },
    optionsMenu: {
      anchorEl: null,
      isOpen: false,
    },
  });

  const HandleClickTitle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      title: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.title.isOpen,
      },
    });
  };

  const HandleClickCodeSnippet = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      codeSnippet: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.codeSnippet.isOpen,
      },
    });
  };

  const HandleClickOptionsMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      optionsMenu: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.optionsMenu.isOpen,
      },
    });
  };

  const MENU_ITEM_TITLES: Array<IElementsToMap> = [
    {
      element: <LooksOneIcon />,
      ClickAction: InsertTitle,
      value: "Title 1",
    },
    {element: <LooksTwoIcon />, ClickAction: InsertTitle, value: "Title 2"},
    {element: <Looks3Icon />, ClickAction: InsertTitle, value: "Title 3"},
    {element: <Looks4Icon />, ClickAction: InsertTitle, value: "Title 4"},
    {element: <Looks5Icon />, ClickAction: InsertTitle, value: "Title 5"},
    {element: <Looks6Icon />, ClickAction: InsertTitle, value: "Title 6"},
  ];
  const MENU_ITEM_CODE_SNIPPET: Array<IElementsToMap> = [
    {
      element: "Simple block",
      ClickAction: () => undefined,
      value: "Simple block",
    },
    {element: "Javascript", ClickAction: () => undefined, value: "Javascript"},
    {element: "Typescript", ClickAction: () => undefined, value: "Typescript"},
    {element: "JSON", ClickAction: () => undefined, value: "JSON"},
    {element: "YAML", ClickAction: () => undefined, value: "YAML"},
  ];

  return (
    <ToggleButtonGroup sx={{width: "auto"}}>
      <ButtonsMapComponent
        ClickCodeSnippet={HandleClickCodeSnippet}
        ClickTitle={HandleClickTitle}
        mode={mode}
        isOpen={OPEN_AND_ANCHOR.optionsMenu.isOpen}
        anchorEl={OPEN_AND_ANCHOR.optionsMenu.anchorEl}
        HandleClose={HandleClickOptionsMenu}
      />
      <MenuMapComponent
        isOpen={OPEN_AND_ANCHOR.title.isOpen}
        anchorEl={OPEN_AND_ANCHOR.title.anchorEl}
        HandleClose={HandleClickTitle}
        componentsToMap={MENU_ITEM_TITLES}
      />
      <MenuMapComponent
        isOpen={OPEN_AND_ANCHOR.codeSnippet.isOpen}
        anchorEl={OPEN_AND_ANCHOR.codeSnippet.anchorEl}
        HandleClose={HandleClickCodeSnippet}
        componentsToMap={MENU_ITEM_CODE_SNIPPET}
      />
    </ToggleButtonGroup>
  );
}
