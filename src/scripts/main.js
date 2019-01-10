/*
Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

1. Display the first and last name of the sales agent.
2. Display all keys and values for the car sold.
3. Display the gross profit made on the sale.
*/


let container = document.querySelector("#container");
container.innerHTML = "<h1>Weekly Sales Report</h1>"

salesByWeek.forEach(sale => {
    container.innerHTML += "<hr />";

    let agentName = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
    container.innerHTML += `<h3>${agentName}</h3>`;

    /* For...Of with Object.entries() | Prints both key and value */
    // console.log(Object.entries(sale));
    for (const entry of Object.entries(sale.vehicle)) {
        container.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }

})