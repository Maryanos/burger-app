import Bread from "./Bread"
import Lettuce from "./Lettuce"
import Tomato from "./Tomato"
import Onion from "./Onion"
import Meat from "./Meat"

function Burger() {
  return (
    <div className="burger">
      <h1>Burger Making App</h1>
      <div className="burger__vegetables">
        <Bread />
        <Lettuce />
        <Tomato />
        <Onion />
        <Meat />
      </div>
    </div>
  )
}

export default Burger
