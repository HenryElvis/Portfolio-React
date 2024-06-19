import { createContext, useContext } from "react";
import { Global } from "./global";

const GlobalContext = createContext<Global | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => 
{
    const singleton = Global.GetInstance();

    return (
        <GlobalContext.Provider value={singleton}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useSingleton = (): Global =>
{
    const singleton = useContext(GlobalContext);

    if (!singleton) 
    {
        throw new Error("useSingleton must be used within a SingletonProvider");
    }

    return singleton;
}