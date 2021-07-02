import React, {useRef, useState} from "react";
// import { Dropdown } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import "../styles/Plants.css";
import "../styles/dropdown.css";
import useOutsideAlerter from "./hooks/useOutsideAlerter";
import StyledComponents from '../styles/StyledComponents'


function Dropdown({
    title,
    items,
    multiSelect = false
}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    const closeDropDown = () => setOpen(false);

    const dropdownRef = useRef(null);
    useOutsideAlerter(dropdownRef, closeDropDown);

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
        <div className="dd-container" ref={dropdownRef}>
            <div className={selection[0] && open ? 'boldBox-open' : selection[0] ? 'boldBox-closed' : open ? 'boldBox-open' : 'dd-wrapper'}>
                <div tabIndex={0}
                    className="dd-header"
                    
                    onKeyPress={
                        () => toggle(!open)
                    }
                    onClick={
                        () => toggle(!open)
                }>
                    <div className="dd-header__title">
                        <p className={selection[0] ? 'bold' : 'regular'}>
                            {title}</p>
                    </div>

                </div>
                {
                open && (
                    <ul className="dd-list" className={open ? 'dd-list-bold' : 'regularBox'}
                        >
                        <div>
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
                                        <span> {
                                            isItemInSelection(item) && multiSelect ? <i class="far fa-check-square"></i> : multiSelect && <i class="far fa-square"></i>
                                        }</span>
                                        <span className={isItemInSelection(item) ? 'bold' : 'regular'}>{item.value}
                                        </span>
                                        
                                    </button>
                                </li>
                            ))
                        } </div>
                    </ul>
                )
            } </div>
        </div>
    );
}


export default Dropdown;
