import { SHEEP, ORE, WOOD, GOLD, CORN, BRICK } from '../types/resources.js';
import { SPACE, ROAD, VILLAGE } from '../types/common.js';
import Resource from './cards/Resource.js';
import { Village, Road, Space } from './cards/common.js'

export default {
    [SHEEP]: Resource,
    [ORE]: Resource,
    [WOOD]: Resource,
    [GOLD]: Resource,
    [CORN]: Resource,
    [BRICK]: Resource,
    [SPACE]: Space,
    [ROAD]: Road,
    [VILLAGE]: Village  
};