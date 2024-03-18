import { createContext, useState, useContext } from "react";

// const black = '#000000';
// const dark = '#121212';
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
// TODO: Note, this does not support customized fonts, just colors.
const defaultPalette = {
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

const PaletteProvider = (props: PaletteProviderProps) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [palette, setPalette] = useState<Palette>(defaultPalette);

    return (
        <PaletteContext.Provider value={{ theme, setTheme, palette, setPalette }} >
            {props.children}
        </PaletteContext.Provider>

    );
};

const usePalette = () => {
    const {palette, theme, setPalette}: PaletteContextType = useContext<PaletteContextType>(PaletteContext);
    const darkPalette = palette.dark;
    const lightPalette = palette.light;
    if (theme === 'dark') {
        return { palette: darkPalette, setPalette };
    }
    return { palette: lightPalette, setPalette };
}

const useTheme = () => {
    const {theme, setTheme}: PaletteContextType = useContext<PaletteContextType>(PaletteContext);
    return { theme, setTheme };
}

export default { PaletteProvider, usePalette, useTheme };
