//*--------------------------------------------------------------------*//
//*--------Reslove Function with delay---------------------------------*//

function delayedString() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise Resolved.");
      }, 2000);
    });
}

// delayedString().then((result) => {
//     console.log(result);
// });


//*--------------------------------------------------------------------*//
//*---------Promise Chaining-------------------------------------------*//

function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(a, b) {

  const [doubleA, doubleB] = await Promise.all([doubleAfter2Seconds(a), doubleAfter2Seconds(b)]);
  
  return doubleA + doubleB;
}

// addAsync(5, 5).then((result) => {
//     console.log(result);
//   })



  
//*--------------------------------------------------------------------*//
//*---------Error Handling---------------------------------------------*//

function promiseWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This is an error!"));
    }, 1000);
  });
}

// promiseWithError().catch((error) => {
//   console.error(error.message);
// });



//*--------------------------------------------------------------------*//
//*--------------------------------------------------------------------*//


const promises = ['Avi','Roi','Levi','David','Moshe',];

  function fetchAllData(promises) {
    return new Promise((resolve, reject) => {
      Promise.all(promises)
        .then((values) => {
          resolve(values);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


  // fetchAllData(promises)
  // .then((values) => {
  //   console.log(values);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  
//*--------------------------------------------------------------------*//
//*-------------async function asyncPromiseWithError------------------*//

// async function asyncPromiseWithError() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is an error!")); // Reject the promise after 1 second
//     }, 1000);
//   });
// }


// asyncPromiseWithError()
//   .catch((error) => {
//     console.error("Caught!", error.message);
//   });


  
//*--------------------------------------------------------------------*//
//*-------------Promise Race-------------------------------------------*//

// function racePromises(racers) {
//   return Promise.race(racers);
// }

// // Example usage:
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 50, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, 'two');
// });

// racePromises([promise1, promise2])
//   .then(console.log)
//   .catch(console.error);

  
//*--------------------------------------------------------------------*//
//*----------Converting Callbacks to Promises--------------------------*//


 //Callbacks

// function fetchDataWithCallback(callback) {
//   const x = 11;
//   const y = 10;

//   if (x < y) { // Correct logic
//     callback(null, "Y is bigger"); // 1st param: error (null for success)
//   } else {
//     callback("Error is occurred", null); // 1st param: error
//   }
// }

// // Usage
// fetchDataWithCallback((error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//   }
// });


            //  ||  \\  
            //  ||  \\  
           ///  \/  \\\                  
          //Converted\\
            
   //Promises
   
  // function fetchDataWithPromise() {
  //   return new Promise((resolve, reject) => {
  //     const x = 12;
  //     const y = 10;
  
  //     if (x < y) {
  //       resolve("Y is bigger");  
  //     } else {
  //       reject("Error is occurred"); 
  //     }
  //   });
  // }
  
  // fetchDataWithPromise()
  //   .then(result => console.log(result)) 
  //   .catch(error => console.error(error)); 
 

  
//*--------------------------------------------------------------------*//
//*-------------Implement a wait function------------------------------*//

let delay = 0;
function waitFor(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms) , delay = ms);
}

// waitFor(3000).then(() => {
//     console.log('Promise resolved after',+delay+' seconds');
//   }
// );


  
//*--------------------------------------------------------------------*//
//*-------------Implement an echo function---------------- ------------*//

async function echo(message, delay) {
  try {
    const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));
    await waitFor(delay);
    console.log(message);
    return message;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

// echo("Hello there!", 1500);

  
//*--------------------------------------------------------------------*//
//*-------------Implementing a Simple Promise.all----------------------*//

// async function simplePromiseAll() {
//   const p1 = new Promise((resolve, reject) => {
//     resolve("Promise one ");
//   });
//   const p2 = new Promise((resolve, reject) => {
//     resolve("Promise two ");
//   });
//   const p3 = new Promise((resolve, reject) => {
//     resolve("Promise three ");
//   });
//   const p4 = new Promise((resolve, reject) => {
//     resolve("Promise four ");
//   });
//   const p5 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
//   });

//   try {
//     const results = await Promise.all([p1, p2, p3, p4, p5]);
//     return results;
//   } catch (error) {
//     throw error;
//   }
// }

// const promisesA = ['p1', 'p2', 'p3', 'p4', 'p5'];

// simplePromiseAll(promisesA)
//   .then((resolvedValues) => {
//     console.log(resolvedValues);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });


//*--------------------------------------------------------------------*//
//*-----------Implementing a Simple Promise.allSettled-----------------*//


// const promisesA = ['p1', 'p2', 'p3', 'p4', 'p5'];
// async function simplePromiseAllSettled(promisesA) {
//   const results = await Promise.allSettled(promisesA);

//   return results.map(result => {
//     if (result.status === 'fulfilled') {
//       return { status: 'fulfilled', value: result.value };
//     } else {
//       return { status: 'rejected', reason: result.reason.message };
//     }
//   });
// }

// simplePromiseAllSettled(promisesA)
//   .then(results => {
//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         console.log(result.value, "resolved");
//       } else {
//         console.error(result.reason, "rejected");
//       }
//     });
//   })
//   .catch(error => {
//     console.error("Error:", error.message);
//   });


//*--------------------------------------------------------------------*//
//*--------------------Rewrite using async/await-----------------------*//

async function loadJson(url) {
  
  let response = await fetch(url); 

    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  }

// loadJson('https://javascript.info/no-such-user.json')
// .catch(alert); // Error: 404


//*--------------------------------------------------------------------*//
//*--------------------------------------------------------------------*//