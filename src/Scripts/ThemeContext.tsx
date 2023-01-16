import React from "react";

interface IThemeContext {
  ToggleColorMode: () => void;
}

export const COLORMODECONTEXT: React.Context<IThemeContext> =
  React.createContext<IThemeContext>({
    ToggleColorMode: () => undefined,
  });
