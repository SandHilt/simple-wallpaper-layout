import { createContext } from "react";

const NavigationContext = createContext<Partial<NavigationContext>>({});

export default NavigationContext;
