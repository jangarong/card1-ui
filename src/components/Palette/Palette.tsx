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

export interface PaletteContext {
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

const PaletteContext = createContext<PaletteContext>({
    theme: 'dark',
    palette: defaultPalette,
    setTheme: () => {},
    setPalette: () => {}
});

export interface PaletteProviderProps {
    children: JSX.Element;
}

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
    const {palette, theme, setPalette}: PaletteContext = useContext<PaletteContext>(PaletteContext);
    const dark = palette.dark;
    const light = palette.light;
    if (theme === 'dark') {
        return { dark, setPalette };
    }
    return { light, setPalette };
}

export const useTheme = () => {
    const {theme, setTheme}: PaletteContext = useContext<PaletteContext>(PaletteContext);
    return { theme, setTheme };
}

export default { PaletteProvider, usePalette, useTheme };
