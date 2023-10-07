import "./error.css";
import { useRouteError } from "react-router-dom";
export const Error = () => {
    const err = useRouteError();
    
    return (
        <div className="error">
            <h1>Oops!!!</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}