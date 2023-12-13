
import {  useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const countState = useSelector(state => state.count);
  console.log(countState)
  
  return (
    <div>
      <p>
      Count is {countState.count}
      </p>
      <button onClick={() => {
        navigate("/calc")
      }}>Show Tools</button>
      <button onClick={() => {
        navigate("/")
      }}>Hide Tools</button>
      <Outlet />
    </div>
  )
}

export default Home
