import {createEvent, createStore} from 'effector' 

export const $filter = createStore([
    {id:0, label:"0 пересадка", checked: true},
    {id:1, label:"1 пересадка", checked: true},
    {id:2, label:"2 пересадка", checked: true},
    {id:3, label:"3 пересадка", checked: true},
])

export const toggleFilter = createEvent()

$filter.on(toggleFilter, (state, id) => {
    return state.map(item => {
        if (item.id === id) item.checked = !item.checked
        return item
    })
})