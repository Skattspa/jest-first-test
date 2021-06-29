import {arrayColors,arrayFruits} from '../arrays';

describe('Comprobamos que existe un elemento',()=>{
    test('¿Tiene un plátano?',()=>{
        expect(arrayFruits()).toContain('plátano');
    });
    test('¿Tiene una banana?',()=>{
        expect(arrayFruits()).toContain('banana');
    });
    test('Comprobar el tamaño del array',()=>{
        expect(arrayFruits()).toHaveLength(7);
    });
    test('Comprobamos que existe un color',()=>{
        expect(arrayColors()).toContain('azul');
    });
});