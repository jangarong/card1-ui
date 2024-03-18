import React, { createContext, useState, useContext } from "react";

const dark = '#1C1C1C';
const dark2 = '#262626';
const lightGrey = '#7D7D7D';
const white = '#FFFFFF';

export type Theme = 'light' | 'dark';

export interface Colors {
    primary: string;
    secondary: string;
    tertiary?: string;
}

export interface ColorTypes {
    base: Colors;
    text: Colors;
}

export interface Palette {
    light?: ColorTypes;
    dark: ColorTypes;
}

export interface PaletteContextType {
    palette: Palette;
    theme: 'light' | 'dark';
    setTheme: (theme: Theme) => void;
    setPalette: (newPalette: Palette) => void;
}

export interface PaletteProviderProps {
    children: JSX.Element;
}

const defaultPalette: Palette = {
    dark: {
        base: {
            primary: dark,
            secondary: dark2,
            tertiary: lightGrey,
        },
        text: {
            primary: white,
            secondary: white
        }
    }
};

const PaletteContext = createContext<PaletteContextType>({
    theme: 'dark',
    palette: defaultPalette,
    setTheme: () => {},
    setPalette: () => {}
});

export const PaletteProvider = (props: PaletteProviderProps) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [palette, setPalette] = useState<Palette>(defaultPalette);

    return (
        <PaletteContext.Provider value={{ theme, setTheme, palette, setPalette }} >
            {props.children}
        </PaletteContext.Provider>
    );
};

export const usePalette = () => {
    const { palette, theme, setPalette }: PaletteContextType = useContext<PaletteContextType>(PaletteContext);
    const darkPalette = palette.dark;
    const lightPalette = palette.light;
    if (theme === 'dark' && !!darkPalette) {
        return { palette: darkPalette, setPalette };
    }
    else if (theme === 'light' && !!lightPalette) {
        return { palette: lightPalette, setPalette };
    }
    throw new Error('card1-ui: Palette does not exist.');
}

export const useTheme = () => {
    const { theme, setTheme }: PaletteContextType = useContext<PaletteContextType>(PaletteContext);
    return { theme, setTheme };
}
