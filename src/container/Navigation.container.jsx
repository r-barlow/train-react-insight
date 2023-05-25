import {useCallback, useState} from "react";

import {ROUTE} from "../tool/constant";

import Navigation from "../component/navigation/Navigation";

const NavigationContainer = () => {

    const [toggled, setToggled] = useState(false);

    const toggle = useCallback(() => {
        setToggled(!toggled);
    }, [toggled]);

    const handleActionClick = (action) => {
        switch (action) {
            case ROUTE.TRANSACTIONS:
                // @todo: define navigation action (add transaction).
                break;
            default:
                break;
        }
    };

    return (
        <Navigation isToggled={toggled} toggle={toggle} onActionClick={handleActionClick}/>
    )
}

export default NavigationContainer;