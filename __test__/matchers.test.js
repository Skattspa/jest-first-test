describe('Comparadores comunes', ()=>{
    const  user = {
        name: "juan",
        lastname: "M"
    };
    const  user2 = {
        name: "juan",
        lastname: "M"
    };
    const  user3 = {
        name: "Juan",
        lastname: "M"
    };

    test('igualdad de elementos', ()=>{
        expect(user).toEqual(user2);
    });
    test('No son iguales',()=>{
        expect(user).not.toEqual(user3);
    })
})