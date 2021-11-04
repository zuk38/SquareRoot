import React, { useEffect, useRef, useState } from 'react';
import '../styles/Plants.css';
import '../styles/dropdown.css';
import useOutsideAlerter from '../components/hooks/useOutsideAlerter';

function Dropdown({ title, items, multiSelect = false, onChange }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  const closeDropDown = () => setOpen(false);
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, closeDropDown);

  useEffect(() => {
    console.log(selection);
    onChange(selection); //update errors every time values change
  }, [selection]);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className='dd-container' ref={dropdownRef}>
      <div
        className={
          selection[0] && open
            ? 'boldBox-open'
            : selection[0]
            ? 'boldBox-closed'
            : open
            ? 'boldBox-open'
            : 'dd-wrapper'
        }
      >
        <div
          tabIndex={0}
          className='dd-header'
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className='dd-header__title'>
            <p className={selection[0] ? 'bold' : 'regular'}>{title}</p>
          </div>
        </div>
        {open && (
          <ul
            className='dd-list'
            className={open ? 'dd-list-bold' : 'regularBox'}
          >
            <div>
              <div className='dd-borderBox'>
                <div className='dd-border'></div>
              </div>
              {items.map((item) => (
                <li className='dd-list-item' key={item.id}>
                  {item.value && (
                    <button
                      type='button'
                      className='dd-button'
                      onClick={() => handleOnClick(item)}
                    >
                      <span>
                        {isItemInSelection(item) && multiSelect ? (
                          <i className='far fa-check-square' />
                        ) : (
                          multiSelect && <i className='far fa-square' />
                        )}
                      </span>

                      <span
                        className={isItemInSelection(item) ? 'bold' : 'regular'}
                      >
                        {item.value.toUpperCase()}
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
