import React from 'react'
import './sort-menu.sass'

export const SortToggle = ({ items, changeActiveFilter }) => {
    
    return (
        <div className="sort-menu">
            { 
                items && items.map(item => {
                    const activeItem = item.active ? 'active' : ''
                    return (
                        <div 
                            className={`sort-menu__item ${activeItem}`} 
                            onClick={()=>changeActiveFilter(item.id)}
                        >
                            {item.label}
                        </div>
                    )
                }) 
            }
        </div>
    )
}
