import {useContext} from "react";

import {NavigationContext} from "../context/Navigation.context";

const useNavigation = () => {

    const context = useContext(NavigationContext);

    if (context === undefined) {
        throw new Error("Invalid navigation context!");
    }

    return context;
};

export default useNavigation;
