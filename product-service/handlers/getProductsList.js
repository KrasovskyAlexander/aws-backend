'use strict';
import mockData from '../data/mockData.js';
import headers from '../data/headers.js';

export const getProductsList = async () => {
    try {
        if (!mockData) {
            return {
                statusCode: 404,
                headers,
                body: JSON.stringify({message: "Products not found"})
            }
        }

        const data = await mockData;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: `Internal server error: ${error}` }),
        };
    }
};
