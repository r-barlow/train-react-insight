export const POSITION = Object.freeze({
        TOP: "top",
        LEFT: "left",
        BOTTOM: "bottom",
        RIGHT: "right"
    }
);

export const REQUEST_METHOD = Object.freeze({
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
})

export const RESPONSE_STATUS = Object.freeze({
    OK: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
});

export const ROUTE = Object.freeze({
    HOME: "",
    DASHBOARD: "dashboard",
    BUDGET: "budget",
    TRANSACTIONS: "transactions",
    REPORTS: "reports",
    LOGOUT: "logout"
});

export const NAVIGATION_ITEMS = Object.freeze([
    {
        title: "Dashboard",
        icon: "./images/dashboard.svg",
        tag: ROUTE.DASHBOARD
    },
    {
        title: "Budget",
        icon: "./images/budget.svg",
        tag: ROUTE.BUDGET
    },
    {
        title: "Transactions",
        icon: "./images/transactions.svg",
        tag: ROUTE.TRANSACTIONS
    },
    {
        title: "Reports",
        icon: "./images/reports.svg",
        tag: ROUTE.REPORTS
    },
    {
        title: "Logout",
        icon: "./images/logout.svg",
        style: {marginTop: 'auto'},
        tag: ROUTE.LOGOUT
    }
]);