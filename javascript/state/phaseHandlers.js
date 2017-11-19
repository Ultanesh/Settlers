import { CHOOSE_RESOURCE, APPLY_RESOURCE_INCOME } from '../types/phases.js';
import chooseResource from './phaseHandlers/chooseResource.js';
import applyResourceIncome from './phaseHandlers/applyResourceIncome.js';

export default {
    [CHOOSE_RESOURCE]: chooseResource,
    [APPLY_RESOURCE_INCOME]: applyResourceIncome
}