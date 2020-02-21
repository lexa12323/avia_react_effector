import { get } from 'axios'
import { SERVER } from '_base/constants'
import { createEffect, createStore} from 'effector' 

export const fetchTickers = createEffect({
    async handler(searchId) {
        const response = await get(`${SERVER}/tickets?searchId=${searchId}`);
        return response.data;
    },
})

export const fetchSearch = createEffect({
    async handler() {
        const { data } = await get(`${SERVER}/search`);
        return data;
    },
})

export const $searchId = createStore(null)
    .on(fetchSearch.done, (state, {result: payload}) => payload.searchId)

export const $isLoadFail = createStore(false)
    .on(fetchTickers.fail, (state, {result: payload}) => true)

export const $tickets = createStore([])
    .on(fetchTickers.done, (state, {result: payload}) => [...state, ...payload.tickets])
