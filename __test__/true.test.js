import{isNull,isFalse,isTrue,isUndefined} from '../true';

describe('Probar resultados nulos',()=>{
    test('Probar null',()=>{
        expect(isNull()).toBeNull();
    });
});
describe('Probar resultados verdaderos',()=>{
    test('Probar verdadero',()=>{
        expect(isTrue()).toBeTruthy();
    });
});
describe('Probar resultados falsos',()=>{
    test('Probar falsos',()=>{
        expect(isFalse()).toBeFalsy();
    });
});
describe('Probar resultados sin definir',()=>{
    test('Probar sin definir',()=>{
        expect(isUndefined()).toBeUndefined();
    });
});
describe('Probar resultados no verdaderos',()=>{
    test('Falso o verdadero',()=>{
        expect(isFalse()).not.toBeTruthy();
    });
});