export default function UserLogin(users){
    alert("ccccc"+sessionStorage.LoginhUserId)

    users.map(element => {                
        if (element.id == sessionStorage.LoginhUserId)
        {
            sessionStorage.clear();
            sessionStorage.setItem("Search__Id", element.id);
        
            alert("wwwwww"+sessionStorage.Search__Id)
        }
        }).join("");     
  
   alert("id============" + sessionStorage.Search__Id);
   
}