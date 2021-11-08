import { createContext } from "react";

interface MenuContextProps {
    selectedItem: string
    handleChangeSelectedItem: (selectedItem: string) => void
}

export const MenuContext = createContext<MenuContextProps | null>(null);
