
import { useDispatch } from 'react-redux';
import { dec, inc } from '../State/counterSlice';

function Counter() {
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => {
            dispatch(inc(2))
        }}>+</button>
        <button onClick={() => dispatch(dec(2))}>-</button>
    </div>
  )
}

export default Counter
