console.log("START FETCHING USER");

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log("This runs while waiting for the API to fetch the user");
