import { Animal } from "../model/animal";

const animais: Animal[] = []

const getAllAnimals = (): Animal[]=>{
    
    return animais
}

const getAnimalById = (id:string): Animal | undefined =>{

    return animais.find(animal=> animal.id === id)
}

const create = (name:string, especie: string)=>{
    
    const id = (animais.length + 1).toString()
    const newAnimal: Animal = {id, name, especie}
    animais.push(newAnimal)

    return newAnimal

}

const updateAnimal = (id:string, name:string, especie:string):Animal | null =>{
    const animal = getAnimalById(id)
    if(animal){
        animal.name = name
        animal.especie = especie
        return animal
    }
    return null
}

const deleteAnimal = (id:string):boolean =>{
    const index = animais.findIndex(animal=> animal.id === id)

    if(index !== -1){
        animais.splice(index, 1)
        return true

    }
    return false
}

export {
    getAllAnimals,
    getAnimalById,
    create,
    updateAnimal,
    deleteAnimal
}

