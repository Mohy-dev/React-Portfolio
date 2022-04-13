import { useState } from "react";
import Button from "./CounterActions";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(12);

  let plus = () => {
    setCount(count + 1);
  };

  let min = () => {
    return count === 0 ? 0 : setCount(count - 1);
  };
  return (
    <section class="counter">
      <div class="container d-flex justify-content-center">
        <div id="buttons">
          <Button opt={"++Client"} action={plus} id="firstBtn"></Button>
        </div>
        <div class="counter__content">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item second__item">
                <div class="counter__item__text">
                  <i class="icon far fa-smile-beam fa-3x"></i>
                  <h2 class="counter_num">{count}</h2>
                  <p>Happy clients Counter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="buttons">
          <Button opt={"--Client"} action={min} id="secondBtn"></Button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
