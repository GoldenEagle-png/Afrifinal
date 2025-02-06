import classes from "./auth.css";

const Layout = (props) => (
    <div className={classes.content}>{props.children}</div>
);

export default Layout;