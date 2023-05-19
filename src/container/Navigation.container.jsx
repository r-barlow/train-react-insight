import {useCallback, useState} from "react";

import Navigation from "../component/navigation/Navigation";

const NavigationContainer = () => {

    const [toggled, setToggled] = useState(false);

    const toggle = useCallback(() => {
        setToggled(!toggled);
    }, [toggled]);

    return (
        <Navigation isToggled={toggled} toggle={toggle}/>
    )
}

export default NavigationContainer;