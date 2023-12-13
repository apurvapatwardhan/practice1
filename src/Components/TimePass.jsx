import { useContext } from "react"
import { AppContext } from "../Context/AppContextProvider"

function TimePass() {
    const ctx = useContext(AppContext);
    console.log(ctx)
  return (
    <div>
      Name is {ctx.name}
      Surname is {ctx.surname}
    </div>
  )
}

export default TimePass
