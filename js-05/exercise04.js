function provideNumber(callback) {
    setTimeout(() => callback(1), 1000);
};

const provideNumbertwo =()=> new Promise(resolve => resolve(5));


const add = function () {
    provideNumber(async function (number) {
        one = number

            const number2 = await provideNumbertwo();
            const number3 = await provideNumbertwo();
            console.log(one + number2 + number3);

        
    });
}
add();