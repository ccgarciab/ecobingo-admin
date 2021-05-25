import {allCodes} from './randomCard.js';

import { writable } from 'svelte/store';

let marked = new Map(allCodes.map((code) => [code, false]));

export const markedStore = writable(marked);