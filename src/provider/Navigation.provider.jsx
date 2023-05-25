import {useLocation} from "react-router-dom";

import {NAVIGATION_ITEMS, ROUTE} from "../tool/constant";
import {NavigationContext} from "../context/Navigation.context";

const NavigationProvider = ({children}) => {

    const location = useLocation();

    let nav = NAVIGATION_ITEMS.find(item => `/${item.tag}` === location.pathname);

    if (nav === undefined) {
        nav = NAVIGATION_ITEMS.find(item => item.tag === ROUTE.DASHBOARD);
    }

    return (
        <NavigationContext.Provider value={{nav}}>
            {children}
        </NavigationContext.Provider>
    )
};

export default NavigationProvider;