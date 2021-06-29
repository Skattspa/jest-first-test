import {getDataFromApi} from '../promise';

const api = 'https://rickandmortyapi.com/api/character/';
const getRick = 'https://rickandmortyapi.com/api/character/1'

describe('Probar async/await',()=>{
    test('Realizar una petición a una api', async ()=>{
        await getDataFromApi(api).then(data=>{
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data=>{
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
    test('Realizar una petición a una API sin usar then()', async () => {
        const data = await getDataFromApi(api);
        expect(data.results.length).toBeGreaterThanOrEqual(0);
    
        const data2 = await getDataFromApi(getRick)
        expect(data2.name).toEqual('Rick Sanchez');
    });

    test('Realizando una petición a una api con error',async ()=>{
        const apiError = 'http://httpstat.us/404';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
    });
    test('Resuelve un Hola!',async ()=>{
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.resolve('Error')).resolves.toBe('Error');
    })
});