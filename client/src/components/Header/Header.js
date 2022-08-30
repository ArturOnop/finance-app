const Header = () => {
    return (
        <div className="pattern-waves items-center flex py-3 gap-5 text-primary">
            <div className="ml-5">
                <a className="btn btn-ghost normal-case text-xl bg-white border border-black/10 shadow-xl">
                    React Test Task
                </a>
            </div>
            <div className="flex gap-3 justify-between">
                <a className="btn btn-ghost bg-white border border-black/10 shadow-xl">Home</a>
                <a className="btn btn-ghost bg-white border border-black/10 shadow-xl">Tickers history</a>
            </div>
            <div>
                <label htmlFor="my-modal-6"
                       className="btn btn-ghost bg-white border border-black/10 shadow-xl modal-button">
                    <img src="images/settings.svg" className="w-5 h-5" alt="settings"/>
                </label>
            </div>
        </div>
    )
}

export default Header;
