export default function Users(users){
    return `
    <h2>All Users</h2>
        <div class="users__grid_container">
            ${users.map(user => {
                return `
                <div class="users__specific_user"
                    <h4 class="user__name_btn">${user.name}</h4>
                    <img src="./images/${user.image}" alt="${user.image}"></img>
                    <input class="user__id" type="hidden" value="${user.id}">
                </div>
               `
        }).join("")}
        </div>
    `
}