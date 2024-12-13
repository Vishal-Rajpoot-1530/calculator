  
import { useSelector } from "react-redux";
 
 export default function Diaplay(){
    const {counter}=useSelector((store)=>store.calculator);
    


 return (
    <div className="display">
        <input value={counter} type="text"  readOnly placeholder="0"/>
    </div>
 )
}
