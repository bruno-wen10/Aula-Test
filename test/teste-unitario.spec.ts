import { it, expect } from "vitest";
import { create, getAllAnimals } from "../src/controller/animal-controller";


it('Testar o retorno inicial do banco de dados', () => {
    const animais = getAllAnimals()
    expect(animais).toEqual([])   
})

it('Testar o retorno da função create', ()=>{
    const createResponse = create('vaca', 'bovino')
    const animais = getAllAnimals()
    
    expect(animais).toEqual([createResponse])
    

})
