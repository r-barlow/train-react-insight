import PropTypes from "prop-types";

const Logo = ({uniqueId, className}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="256"
            height="256"
            version="1.1"
            viewBox="0 0 67.733 67.733"
            xmlSpace="preserve"
            className={className}>
            <defs>
                <linearGradient id={`linearGradient15844${uniqueId}`}>
                    <stop offset="0" stopColor="#5c9d30" stopOpacity="1"/>
                    <stop offset="1" stopColor="#1e732f" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id={`linearGradient11783${uniqueId}`}>
                    <stop offset="0" stopColor="#f82b07" stopOpacity="1"/>
                    <stop offset="1" stopColor="#ea9b0d" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id={`linearGradient8015${uniqueId}`}>
                    <stop offset="0" stopColor="#05bdef" stopOpacity="1"/>
                    <stop offset="1" stopColor="#08519d" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id={`linearGradient5943${uniqueId}`}>
                    <stop offset="0" stopColor="#77b332" stopOpacity="1"/>
                    <stop offset="1" stopColor="#3a842e" stopOpacity="1"/>
                </linearGradient>
                <linearGradient
                    id={`linearGradient5945${uniqueId}`}
                    x1="49.945"
                    x2="79.996"
                    y1="84.36"
                    y2="84.36"
                    gradientTransform="rotate(-119.23 68.482 89.17)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref={`#linearGradient8015${uniqueId}`}/>
                <linearGradient
                    id={`linearGradient8008${uniqueId}`}
                    x1="49.945"
                    x2="79.996"
                    y1="84.36"
                    y2="84.36"
                    gradientTransform="translate(-.05 -.085)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref={`#linearGradient5943${uniqueId}`}/>
                <linearGradient
                    id={`linearGradient11776${uniqueId}`}
                    x1="49.945"
                    x2="79.996"
                    y1="84.36"
                    y2="84.36"
                    gradientTransform="rotate(118.685 68.53 89.238)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref={`#linearGradient11783${uniqueId}`}/>
                <linearGradient
                    id={`linearGradient15846${uniqueId}`}
                    x1="65.299"
                    x2="69.779"
                    y1="78.092"
                    y2="100.262"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref={`#linearGradient15844${uniqueId}`}/>
            </defs>
            <g>
                <g
                    fillOpacity="1"
                    stroke="none"
                    strokeDasharray="none"
                    strokeDashoffset="0"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="matrix(1.84072 0 0 1.84072 -91.1 -130.782)">
                    <path
                        fill={`url(#linearGradient15846${uniqueId})`}
                        d="M67.51 78.295l.045 2.072c-5.011.272-8.257 7.2-.09 10.153v4.652c-.708-.073-1.502-.204-1.805-1.308-.225-.923-.66-1.205-1.535-1.263l-1.985.045c.41 4.696 3.472 4.823 5.46 5.28-.138 2.234 1.068 1.611 1.805 1.985l-.045-2.03c8.168-.803 6.468-9.198 0-10.244l.045-4.558c1 .164 1.598.59 1.85 1.263.216.63.326 1.244 1.264 1.309h2.211c-.238-1.216.233-4.328-5.37-5.19.154-1.835-.979-1.812-1.85-2.166zm.06 4.811l.003 4.038c-2.751-.88-2.805-3.29-.002-4.038zm1.918 7.938c2.803.747 2.714 3.295-.037 4.176z"
                        opacity="1"
                        stopColor="#000"
                        stopOpacity="1"
                        vectorEffect="none"/>
                    <path
                        fill={`url(#linearGradient11776${uniqueId})`}
                        d="M71.036 71.48c15.932 4.27 15.625 28.604-2.776 30.541 22.229 1.995 23.404-29.219 2.776-30.54z"
                        stopColor="#000"
                        vectorEffect="none"/>
                    <path
                        fill={`url(#linearGradient5945${uniqueId})`}
                        d="M82.232 100.652c-12.08 11.23-32.535-1.955-24.402-18.575-13.497 17.775 12.324 35.35 24.402 18.575z"
                        opacity="1"
                        stopColor="#000"
                        stopOpacity="1"
                        vectorEffect="none"/>
                    <path
                        fill={`url(#linearGradient8008${uniqueId})`}
                        d="M51.699 95.478c-3.902-16.026 17.593-27.437 28.125-12.224-8.92-20.458-36.867-6.508-28.125 12.224z"
                        stopColor="#000"
                        vectorEffect="none"/>
                </g>
            </g>
        </svg>
    )
};


Logo.propTypes = {
    uniqueId: PropTypes.string.isRequired
}

export default Logo;