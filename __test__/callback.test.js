import {callBackHell} from '../callback';

describe('Probando un callback', ()=>{
    test('Callback',done =>{
        function otherCallBack(data){
            expect(data).toBe('Hola javascript!');
            done();
        }
        callBackHell(otherCallBack);
    });
});