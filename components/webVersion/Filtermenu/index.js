import useInput from "@/hooks/useInput"
import style from "./style.js";
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { setFilter } from "@/store/reducers/fliterSlice.js";


export default function FilterMenu () {
    const filterInput =  useInput("");
    const sortByInput = useInput("lowestPrice");
    const goodCategoryInput = useInput("all");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilter({type: "search", value: filterInput.value}));
        dispatch(setFilter({type: "sort", value: sortByInput.value}));
        dispatch(setFilter({type: "filter", value: goodCategoryInput.value}));
    }
    return(<div className={style}>
        <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full">
                Search Name:
            </div>
            
                <input type="text" value={filterInput.value} onChange={filterInput.onChange} className="w-full border-2"/>
            
            <div className="w-full">
                Sort By:
            </div>
            
            <select name="sortBy" value={sortByInput.value} onChange={sortByInput.onChange} className="w-full">
                <option value="lowestPrice">Lowest Price</option>
                <option value="highestPercentage">Highest Percentage</option>   
                <option value="mostValue">Most Value</option>
            </select>
            <div className="w-full">
            Good Catergory:
            </div>
            
            <select name="goodCategory" value={goodCategoryInput.value} onChange={goodCategoryInput.onChange} className="w-full">
                <option value="all">All</option>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Snack">Snack</option>
            </select>
            <button type="submit" className="w-full bg-orange-50">Filter</button>
        </form>
    </div>)
}