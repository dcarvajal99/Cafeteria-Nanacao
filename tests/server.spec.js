const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    it("GET /cafes", async () => {
        const res = await request(server).get("/cafes");
        console.log(res.body);
        expect(res.statusCode).toEqual(200);
    });

    
    it("DELETE /cafes/:id", async () => {
        const res = await request(server).delete("/cafes/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("cafe");
    });
});