import app from "../src/api";
import request from "supertest";
import { it, expect } from "vitest";

it("Testar retorno da função getAll", async () => {
  const response = await request(app).get("/animalAll");
  expect(response.status).toBe(200);
  expect(response.body).toEqual([]);
});

it("Testar retorno da função create", async () => {
  const response = await request(app)
    .post("/animals")
    .send({ name: "Cavalo", especie: "mamifero" });

  expect(response.status).toBe(201);
  expect(response.body).toEqual({
    id: "1",
    name: "Cavalo",
    especie: "mamifero",
  });
});

it("Testar retorno da função update", async () => {
  const createResponse = await request(app)
    .post("/animals")
    .send({ name: "Cavalo", especie: "mamifero" });
    
    const updateResponse = await request(app).put(`/animals/${createResponse.body.id}`).send({name:'gato', especie:'felino'})
    expect(updateResponse.status).toBe(200)
    expect(updateResponse.body).toEqual({id:createResponse.body.id, name:'gato', especie:'felino'})
});

it('Testar retorno da função delete',async () => {
    const createResponse = await request(app)
    .post('/animals')
    .send({name: "Cavalo", especie: "mamifero"})
    
    const deleteResponse = await request(app)
    .delete(`/animals/${createResponse.body.id}`)

    expect(deleteResponse.status).toBe(200)
    expect(deleteResponse.body).toEqual({ success: true })
})


