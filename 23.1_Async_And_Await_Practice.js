const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Successfully");
    }, 5000);
});



async function getTheData() {
    console.log("Hello World");

    await pr.then((res) => {
        console.log(res);
    })

    console.log("Bhavishaya Khandelwal");
}


// getTheData();



async function handlePromise() {
    console.log("Hello World");

    const value = await pr;
    console.log("JavaScript");
    console.log(value);


    const value2 = await pr;
    console.log("JavaScript 2");
    console.log(value2);
}


// handlePromise();