let tableHeaders = document.getElementById("table-rows");
let content = document.getElementById("table-body");

function getData() {
    let url = "https://dummyjson.com/users";
    let params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    


fetch(url, params)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let userList = data.users;

        let html = "";
        userList.forEach(function (users) {
            html += "<tr>"
            for(let key in users) {
                if(typeof users[key] === "string") {
                    html += "<td>" + users[key] + "</td>"
                } else {
                    html += "<td>" + JSON.stringify(users[key]) + "</td>"
                } 
            }
            html += "</tr>"
        })
        content.innerHTML = html;
    }) 
    .catch((error) => { 
        console.error("Error fetching data:", error);

    });
}

window.onload = function() {
    getData()
}
