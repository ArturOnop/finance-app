import {useDispatch, useSelector} from "react-redux";
import {changeSearchTicker} from "../../../redux/searchTicker/searchTickerAction";

const SearchTicker = () => {
    const searchTickerData = useSelector(state => state.searchTicker);
    const dispatch = useDispatch();

    return (
        <input type="text"
               placeholder="Search tickers"
               className="input input-lg shadow-lg w-full mt-10"
               value={searchTickerData}
               onChange={e => dispatch(changeSearchTicker(e.target.value))}/>
    )
}

export default SearchTicker;
