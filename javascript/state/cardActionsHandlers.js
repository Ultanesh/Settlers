import { SHEEP, ORE, WOOD, GOLD, CORN, BRICK } from '../types/resources.js';
import resource from './cardActionHandlers/resource.js';

export default {
    [SHEEP]: resource,
    [ORE]: resource,
    [WOOD]: resource,
    [GOLD]: resource,
    [CORN]: resource,
    [BRICK]: resource,
}