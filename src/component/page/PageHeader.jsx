import useNavigation from "../../hook/useNavigation";

import "./page-header.scss";
import UserDetailsComponent from "../../container/UserDetails.component";
import Logo from "../../icon/Logo";
import {useContext} from "react";
import {NavigationContext} from "../../context/Navigation.context";

const PageHeader = () => {

    const {nav} = useNavigation();
    const Icon = nav.icon;

    return (
        <>
            <section className="page__header">
                <h3>{nav.title}</h3>
                <UserDetailsComponent isMobile={false} />
            </section>

            <section className="page__header--mobile">
                <article className="mobile__header">
                    <Logo uniqueId="mobile-logo" className="mobile__logo"/>
                    <h1 className="mobile__title">Insight</h1>
                </article>
                <article className="breadcrumb">
                    <div className="breadcrumb__item">
                        <Icon className="breadcrumb__icon"/>
                        <h2 className="breadcrumb__title">{nav.title}</h2>
                    </div>
                </article>
            </section>
        </>
    );
};

export default PageHeader;