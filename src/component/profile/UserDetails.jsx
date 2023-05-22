import "./user-details.scss";

const UserDetails = ({isMobile, user}) => {

    const mobile = isMobile ? "user-detail__frame user-detail--mobile" : "user-detail__frame";

    return (
        <div className={mobile}>
            <div className="user-detail__image">
                <span className="user-detail__initial">{user.initial}</span>
            </div>
            <div className="d-flex flex-column w-auto">
                <p className="user-detail__full-name">{user.fullName}</p>
                <p className="user-detail__username">{user.username}</p>
            </div>
        </div>
    );
};

export default UserDetails;