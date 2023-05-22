import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getUserDetails} from "../state/action/profile.actions";
import {getUserNameFromCookie} from "../tool/auth.util";

import UserDetails from "../component/profile/UserDetails";

const UserDetailsComponent = ({isMobile}) => {

    const dispatch = useDispatch();
    const user = useSelector(({profile_store}) => profile_store.user);

    const username = getUserNameFromCookie();

    useEffect(() => {
        dispatch(getUserDetails(username));
    }, [username]);

    return (
        <UserDetails isMobile={isMobile} user={user}/>
    );
};

export default UserDetailsComponent;