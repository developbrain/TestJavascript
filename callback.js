console.log('Start');

// Async Call
/*
    function testFunction(){
        setTimeout(() => {
            console.log('Here is The Data');
        }, 2000);
    }
    testFunction();
*/

// Async with without callback
/*
    function testFunction(param1, param2){
        setTimeout(() => {
            console.log('Here is The Data');
            return {result1 : param1, result2 : param2};
        }, 2000);
    }

    const res = testFunction('Swarnendu', 'hello@hello.com');
    console.log(res);
        //Result
            // Start
            // undefined
            // Finish
            // Here is The Data
*/

// Async with callback
/*
    function testFunction(param1, param2, callback){
        setTimeout(() => {
            console.log('Here is The Data');
            callback({result1 : param1, result2 : param2});
        }, 2000);
    }

    const res = testFunction('Swarnendu', 'hello@hello.com', (result) => {
        console.log(result);
    });
    console.log(res);
        //Result
            // Start
            // undefined
            // Finish
            // Here is The Data
            // { result1: 'Swarnendu', result2: 'hello@hello.com' }
*/

// Async with nested callback
/*
    function testUserFunction(param1, param2, callback){
        setTimeout(() => {
            console.log('Here is The testUserFunction Data');
            callback({result1 : param1, result2 : param2});
        }, 2000);
    }

    function testUserDetailsFunction(param1, callback){
        setTimeout(() => {
            console.log('Here is The testUserDetailsFunction Data');
            callback({result1 : param1, result2 : 'UserDetails'});
        }, 2000);
    }

    const res = testUserFunction('Swarnendu', 'hello@hello.com', (result) => {
        console.log(result);
        const resDtls = testUserDetailsFunction(result.result2, (resultDtls) => {
            console.log(resultDtls);
        });
        console.log(resDtls);
    });
    console.log(res);
    //Result:
        // Start
        // undefined
        // Finish
        // Here is The testUserFunction Data
        // { result1: 'Swarnendu', result2: 'hello@hello.com' }
        // undefined
        // Here is The testUserDetailsFunction Data
        // { result1: 'hello@hello.com', result2: 'UserDetails' }
*/

//Promise
/*
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Here is The Promise Data');
            resolve({result1 : 'abc', result2 : 'def'});
        }, 2000);
    });

    promise.then((promiseData) => {
        console.log(promiseData);
    });
    //Result
        // Start
        // Finish
        // Here is The Promise Data
        // { result1: 'abc', result2: 'def' }
*/

//Promise with Error Handling
/*
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Here is The Promise Data');
            //resolve({result1 : 'abc', result2 : 'def'});
            reject(new Error('Here is an Error'));
        }, 2000);
    });

    promise.then((promiseData) => {
        console.log(promiseData);
    }).catch((error) => {
        //console.log(error);
        console.log(error.message);
    });

    //Result
        // Start
        // Finish
        // Here is The Promise Data
        // Here is an Error
*/

// Async with nested callback with Promise
/*
    function testUserFunction(param1, param2){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Here is The testUserFunction Data');
                resolve({result1 : param1, result2 : param2});
            }, 2000);
        });
    }

    function testUserDetailsFunction(param1){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Here is The testUserDetailsFunction Data');
                resolve({result1 : param1, result2 : 'UserDetails'});
            }, 2000);
        });
    }

    const res = testUserFunction('Swarnendu', 'hello@hello.com')
        .then(promiseData1 => {
            console.log(promiseData1); 
            testUserDetailsFunction(promiseData1.result1)
            .then(promiseData2 => console.log(promiseData2));
        });

    console.log(res);
    //Result:
        // Start
        // Promise { <pending> }
        // Finish
        // Here is The testUserFunction Data
        // { result1: 'Swarnendu', result2: 'hello@hello.com' }
        // Here is The testUserDetailsFunction Data
        // { result1: 'Swarnendu', result2: 'UserDetails' }
*/

// Promise All 
/*
    const youtube = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data from youtube');
            resolve({data : 'ytdata'});
        }, 2000);
    });

    const facebook = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data from Facebook');
            resolve({data : 'fbdata'});
        }, 5000);
    });

    Promise.all([youtube, facebook])
    .then(result => console.log(result));
*/


// Async Await With Error Handling

function testUserFunction(param1, param2){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Here is The testUserFunction Data');
            resolve({result1 : param1, result2 : param2});
            //reject(new Error('Here is an Error at testUserFunction'));
        }, 2000);
    });
}

function testUserDetailsFunction(param1){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Here is The testUserDetailsFunction Data');
            resolve({result1 : param1, result2 : 'UserDetails'});
            //reject(new Error('Here is an Error at testUserDetailsFunction'));
        }, 3000);
    });
}

async function resultCall(){
    try {
        const testUser = await testUserFunction('My name', 'habsha@gmail.com');
        const testUserDtls = await testUserDetailsFunction(testUser.result1);

        console.log(testUser);
        console.log(testUserDtls);
    } catch (error) {
        console.log(error.message);
    }
}

resultCall();
//Result:
    // Start
    // Finish
    // Here is The testUserFunction Data
    // { result1: 'My name', result2: 'habsha@gmail.com' }
    // Here is The testUserDetailsFunction Data
    // { result1: 'My name', result2: 'UserDetails' }

console.log('Finish');