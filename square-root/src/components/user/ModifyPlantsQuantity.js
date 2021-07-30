import React, { useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

export default function ModifyPlantsQuantity(props) {
  let plant;
  if (props.plant) plant = props.plant;

  let quantity;
  if (props.quantity !== undefined) quantity = props.quantity;
  else quantity = plant.quantity;

  useEffect(() => {
    console.log("plant");
    document.getElementById(plant.norwegian_name).value = quantity;
  }, [quantity]);

  /*useEffect(() => {
    if (props.quantity !== undefined && plant.quantity !== undefined) {
        console.log("quantity")
      document.getElementById(plant.norwegian_name).value = props.quantity;
    }
  }, [props.quantity]);*/

  return (
    <div class="quantity">
      <button
        className="minus-btn"
        type="button"
        name="button"
        onClick={() => props.onRemove(plant)}
      >
        <MinusIcon />
      </button>

      <input
        id={plant.norwegian_name}
        type="text"
        name="name"
        defaultValue={quantity || 0}
        onBlur={(e) => props.handleQuantityInput(e)}
      />

      <button
        className="plus-btn"
        type="button"
        name="button"
        onClick={() => props.onAdd(plant)}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
