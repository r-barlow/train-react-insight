import useNavigation from "../../hook/useNavigation";

import "./page-header.scss";

const PageHeader = () => {

    const {nav} = useNavigation();

    return (
        <section className="page__header">
            <h3>{nav.title}</h3>
        </section>
    );
};

export default PageHeader;