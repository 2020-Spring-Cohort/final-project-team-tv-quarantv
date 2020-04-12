export default function Users(users){
    //const Login_User__Id = event.target.parentElement.querySelector('.add-__username').value;

//alert("user id =" + Login_User__Id);
    return `
    <h2>All Users</h2>
        <div class="users__grid_container">
            ${users.map(user => {
      //          localStorage.clear();
       //         localStorage.setItem("vistorId",user.id);               
       //         localStorage.setItem("vistorName",user.name);
                return `
                <div class="users__specific_user"
                    <h4 class="user__name_btn">${user.name}</h4>
                    <img class="users__user_image" src="./img/users/${user.image}" alt="${user.image}"></img>
                    <input class="user__id" type="hidden" value="${user.id}">
                </div>
               `
        }).join("")}
        </div>
    `
}
/*
localStorage.clear();
    ${sessionStorage.setItem("Login_User__Id",user.id)}            
    ${sessionStorage.setItem("Login_User__Name",user.name)}

*/