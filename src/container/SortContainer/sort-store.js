import {createEvent, createStore} from 'effector' 

function sortByProperty(property) {
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
}

function sortByTime(a,b) {
    const segmentsSum = (item) => item.segments.reduce((totalTime, segment)=> totalTime + segment.duration, 0)
    if (segmentsSum(a) > segmentsSum(b)) return 1;
    else if (segmentsSum(a) < segmentsSum(b)) return -1;
    return 0 
}

export const changeActiveFilter = createEvent();

export const $sort = createStore([
    {id:0, label:"Самый дешевый", func: sortByProperty('price'), active: true},
    {id:1, label:"Самый быстрый", func: sortByTime},
])

$sort.on(changeActiveFilter, (state, id) => {
    return state.map(item => {
        return {...item, active: item.id === id}
    })
})
