import { SHEEP, ORE } from '../../types/resources.js';
import { ADD_RESOURCE_INCOME, STEAL_ORE_AND_SHEEP, SET_RESOURCE_AMOUNT } from '../../types/actions.js';

export default function resourceActionHandler(resource, action) {
    switch (action.type) {
        case ADD_RESOURCE_INCOME: 
            if (action.payload === resource.type && resource.amount < 3) {
                return {
                    ...resource,
                    amount: resource.amount + 1
                };
            }

            return resource;
        case STEAL_ORE_AND_SHEEP:
            if ([SHEEP, ORE].includes(resource.type)) {
                return {
                    ...resource,
                    amount: 0
                }
            }

            return resource;
        case SET_RESOURCE_AMOUNT:
            if (action.payload.resource === resource) {
                return {
                    ...resource,
                    amount: action.payload.amount
                }
            }

            return resource;
        default: 
            return resource;
    }
}