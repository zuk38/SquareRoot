import React, {useState} from 'react';
// import { Dropdown } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import "../styles/Plants.css";
import "../styles/dropdown.css";
import onClickOutside from 'react-onclickoutside';
import StyledComponents from '../styles/StyledComponents'


function Dropdown({
    title,
    items,
    multiSelect = false
}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    Dropdown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([
                    ...selection,
                    item
                ])
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
            setSelection([... selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (
      <div className="dd-container">
        <div className="dd-wrapper">
            <div tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={
                    () => toggle(!open)
                }
                onClick={
                    () => toggle(!open)
            }
            >
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">
                        {title}</p>
                </div>
                
            </div>
            {
            open && (
                <ul className="dd-list">
                  <div className="dd-borderBox">
                <div className="dd-border"></div>
                </div>
                    {
                    items.map(item => (
                        <li className="dd-list-item"
                            key={
                                item.id
                        }>
                            <button type="button" className="dd-button"
                                onClick={
                                    () => handleOnClick(item)
                            }>
                                <span>{
                                    item.value
                                }</span>
                                <span>
                                    {
                                    isItemInSelection(item) && <i class="fas fa-check"></i>
                                }</span>
                            </button>
                        </li>
                    ))
                } </ul>
            )
        } </div>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,

};

export default onClickOutside(Dropdown, clickOutsideConfig);
