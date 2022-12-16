import { getProductsList } from "../getProductsList";
import { getProductsById } from "../getProductsById";
import mockData from "../../data/mockData";

describe('Unit test for app handlers', function () {

    it('getProductsList', async () => {
        const result = await getProductsList({})

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(JSON.stringify(mockData));
    });

    describe('getProductsById', () => {

        it('getProductsById succesful found product', async () => {
            const event = {
                pathParameters: {
                    productId: "1"
                }
            } 
    
            const result = await getProductsById(event)
    
            expect(result.statusCode).toEqual(200);
            expect(result.body).toEqual(JSON.stringify(mockData[0]));
        });

        it('getProductsById not found product', async () => {
            const event = {
                pathParameters: {
                    productId: "not exsist"
                }
            } 
    
            const result = await getProductsById(event)
    
            expect(result.statusCode).toEqual(404);
            expect(result.body).toEqual(JSON.stringify({ message: "Product not found" }));
        });

    });
});
