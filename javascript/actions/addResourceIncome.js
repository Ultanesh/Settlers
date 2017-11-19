import { ADD_RESOURCE_INCOME } from '../types/actions.js';

export default function addResourceIncome(type) {
    return {
        type: ADD_RESOURCE_INCOME,
        payload: type
    };
}