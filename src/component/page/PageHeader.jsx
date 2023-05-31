import useNavigation from "../../hook/useNavigation";

import "./page-header.scss";
import UserDetailsComponent from "../../container/UserDetails.component";

const PageHeader = () => {

    const {nav} = useNavigation();

    return (
        <section className="page__header">
            <h3>{nav.title}</h3>
            <UserDetailsComponent isMobile={false} />
        </section>
    );
};

export default PageHeader;