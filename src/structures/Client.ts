import { EventEmitter } from "node:events";

/**
 * The main hub for interacting with the Guilded API.
 */
export class Client extends EventEmitter {
    constructor() {
        super();
    };
};