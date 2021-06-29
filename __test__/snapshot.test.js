import {getCharacter} from '../snapshot';
import rick from '../rick.json';

describe('Es hora de los snapshots o instantáneas',()=>{
    test('Snapshot',()=>{
        expect(getCharacter(rick)).toMatchSnapshot();
    });

   /*  test('Siempre fallará la instantánea',()=>{
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number),
            createAt :expect.any(Date)
        });
    }); */
    test('Tenemos una excepción en el código',()=>{
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Juan M"
        }

        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });
});
