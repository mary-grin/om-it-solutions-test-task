import { createContext, FC, ReactNode, useState } from "react";

export const themeContext = createContext<{
  theme: string;
  changeTheme: () => void;
}>({
  theme: "light",
  changeTheme: () => {},
});

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext: FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const changeTheme = () => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
