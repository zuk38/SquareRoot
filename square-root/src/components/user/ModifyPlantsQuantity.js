import React from "react";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

export default function ModifyPlantsQuantity(props) {
  return (
    <div class="quantity">
      <button
        className="minus-btn"
        type="button"
        name="button"
        onClick={props.subtractQuantity}
      >
        <MinusIcon />
      </button>

      <input
        id={props.id}
        type="text"
        name="name"
        defaultValue={props.quantity || 0}
        onBlur={(e) => props.handleQuantityInput(e)}
      />
      <button
        className="plus-btn"
        type="button"
        name="button"
        onClick={props.addQuantity}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
