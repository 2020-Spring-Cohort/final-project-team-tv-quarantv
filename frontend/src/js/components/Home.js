export default function Home(users) {
    return `    
    <p id="homepage-description">Home page</p>
    <h2>All Users</h2>
    <div class="users__grid_container">
    <select id="list" name="u" onchange="getSelectValue()"  class="add-__username" type="dropdown">
         ${users.map(user => {
                return `
                <option class="add-username__userId" value="${user.id}">${user.name}</option>
                ${sessionStorage.setItem("Login_User__Id",user.id)}
                ${sessionStorage.setItem("Login_User__Name",user.name)}
            `
        }).join("")}
    </select>
    </div>        
    `;
    
}