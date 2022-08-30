import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="pattern-waves items-center flex py-3 gap-5 text-primary shadow-sm">
            <div className="ml-5">
                <NavLink to="/"
                         className="btn btn-ghost normal-case text-xl bg-white border border-black/10 shadow-xl">
                    React Test Task
                </NavLink>
            </div>
            <div className="flex gap-5 justify-between ml-auto">
                <NavLink to="/"
                         className="btn btn-ghost bg-white border border-black/10 shadow-xl">
                    Home
                </NavLink>
                <NavLink to="/trend"
                         className="btn btn-ghost bg-white border border-black/10 shadow-xl">
                    Trend
                </NavLink>
            </div>
            <div className="mr-5">
                <label htmlFor="my-modal-6"
                       className="btn btn-ghost bg-white border border-black/10 shadow-xl modal-button">
                    <img src="images/settings.svg" className="w-5 h-5" alt="settings"/>
                </label>
            </div>
        </div>
    )
}

export default Navbar;
