'use strict';
import headers from '../data/headers.js';

export const createProduct = async () => {
    try {

        return {
            statusCode: 201,
            headers,
            body: JSON.stringify({ message: `Product succesfully created` }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: `Internal server error: ${error}` }),
        };
    }
};