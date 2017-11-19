import { ROGUE, SUCCESSFUL_YEAR } from '../types/events.js';
import rogue from './events/rogue.js';
import successfulYear from './events/successfulYear.js';

export default {
    [ROGUE]: rogue,
    [SUCCESSFUL_YEAR]: successfulYear
}