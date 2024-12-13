import { useDispatch } from "react-redux"
import { Action } from "../store/App_Store";

export default function Button({item}){
    const dispatch=useDispatch();
     

    return (
        <div className="buttons">
            <button onClick={()=>dispatch(Action.add(item))}>{item}</button>
        </div>
    )
}