import React from 'react'
//import './groupbox.sass';

export const Checkbox = ({children, checked, toggleFilter, id}) => {
    return (
        <div >
            <label><input type="checkbox" checked={checked} onChange={() => toggleFilter(id)} />{children}</label>
        </div>
    )
}
