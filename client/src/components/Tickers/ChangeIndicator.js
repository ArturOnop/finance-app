const ChangeIndicator = ({indicator}) => {
    return (
        <div className={`${indicator === "Up" ? "bg-green-100" : "bg-red-100"} 
            w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center`}>
            {indicator === "Up" ?
                <img src="images/up-arrow.svg" alt="up" className="w-4 h-4 sm:w-5 sm:h-5"/> :
                <img src="images/down-arrow.svg" alt="down" className="w-4 h-4 sm:w-5 sm:h-5"/>
            }
        </div>
    )
}

export default ChangeIndicator;
