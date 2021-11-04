import React from 'react';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

export default function ModifyPlantsQuantity(props) {
  return (
    <div class='quantity'>
      <button
        className='minus-btn'
        type='button'
        name='button'
        onClick={props.onRemove}
      >
        <MinusIcon />
      </button>

      <input
        id={props.id}
        type='text'
        name='name'
        defaultValue={props.quantity || 0}
        onBlur={props.handleQuantityInput}
      />

      <button
        className='plus-btn'
        type='button'
        name='button'
        onClick={props.onAdd}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
