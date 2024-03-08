import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

function CounterRedux(){
const  count = useSelector((state)=>state.count)
const dispatch = useDispatch(); 
 return(
  <>
   <h1> {count}</h1>
   <button onClick={()=> dispatch(increment(1))}>+</button>
   <button onClick={()=> dispatch(decrement(1))}>-</button>
  </>
 );
}
export default CounterRedux; 