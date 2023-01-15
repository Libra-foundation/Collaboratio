import React from "react";

export const COLORMODECONTEXT: React.Context<{ToggleColorMode: () => void}> =
  React.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function -- I'm oblige to declare an empty function to set the type
    ToggleColorMode: (): void => {},
  });
