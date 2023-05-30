import {ReactComponent as DashboardIcon} from "../icon/dashboard.svg";
import {ReactComponent as BudgetIcon} from "../icon/budget.svg";
import {ReactComponent as TransactionsIcon} from "../icon/transactions.svg";
import {ReactComponent as ReportsIcon} from "../icon/reports.svg";
import {ReactComponent as LogoutIcon} from "../icon/logout.svg";

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
        icon: DashboardIcon,
        tag: ROUTE.DASHBOARD
    },
    {
        title: "Budget",
        icon: BudgetIcon,
        tag: ROUTE.BUDGET
    },
    {
        title: "Transactions",
        icon: TransactionsIcon,
        tag: ROUTE.TRANSACTIONS
    },
    {
        title: "Reports",
        icon: ReportsIcon,
        tag: ROUTE.REPORTS
    },
    {
        title: "Logout",
        icon: LogoutIcon,
        style: {marginTop: 'auto'},
        tag: ROUTE.LOGOUT
    }
]);