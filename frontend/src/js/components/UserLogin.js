export default function UserLogin(users){
    alert("ccccc"+sessionStorage.SearchUserName)

    users.map(element => {                
        if (element.name == sessionStorage.SearchUserName)
        {
            sessionStorage.clear();
            sessionStorage.setItem("Search__Id", element.id);
        
            alert("wwwwww"+sessionStorage.Search__Id)
        }
        }).join("");     
  
   alert("id============" + sessionStorage.Search__Id);
   
}