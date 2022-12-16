'use strict';
import mockData from '../data/mockData.js';
import headers from '../data/headers.js';

export const getProductsById = async (event) => {
    try {
        const { productId } = event.pathParameters;
        const product = await mockData.find(({id}) => id === productId);

        if (!product) {
            return {
                statusCode: 404,
                headers,
                body: JSON.stringify({ message: "Product not found" }),
            };
        }
            

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(product),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: `Internal server error: ${error}` }),
        };
    }
};
