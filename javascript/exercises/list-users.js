async function fetchUsersData() {
    // Fetch the resource and get a Response (status, headers, body stream)
    const response = await fetch("data/users.json");
    // Parse the response object to JSON
    const data = await response.json();
    // Verify the code is working by logging the data to the console
    console.log(data);
    displayUsers(data);
}

// Call the function to run the fetch request
fetchUsersData();


// Function to handle the DOM output
function displayUsers(usersArray) {
    const container = document.getElementById("users-container");
    let htmlOutput = "";

    // Loop through each product in the array
    usersArray.forEach(user => {
        /* Build the HTML string using the compound assignment operator 
        and template literals.
        Line breaks added for readability */
        htmlOutput += `
            <p>
            <b>${user.firstName}  ${user.lastName}</b> Age: ${user.age}
            Available?: ${user.inStock ? "Yes" : "No"}
            </p>
        `;
    });

    /* Output the final HTML to the "products-container"
    DIV element on the web page */
    container.innerHTML = htmlOutput;
}