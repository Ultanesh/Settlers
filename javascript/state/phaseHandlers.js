import { CHOOSE_RESOURCE } from '../types/phases.js';
import ChoseResource from './phaseHandlers/ChoseResource.js';

export default {
    [CHOOSE_RESOURCE]: ChoseResource,
}