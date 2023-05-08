import "./page-header.scss";

const PageHeader = (props) => {
    return (
        <section className="page__header__frame">
            <h3>{props.title}</h3>
        </section>
    );
};

export default PageHeader;