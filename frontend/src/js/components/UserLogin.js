export default function UserLogin(users){
    alert("ccccc"+localStorage.LoginhUserId)

    
   
    users.map(element => {                
        if (element.id == localStorage.LoginhUserId)
        {
          //  sessionStorage.clear(Search__Id);
            sessionStorage.setItem("Search__Id", element.id);
        
           
        }
        }).join("");     
  
   alert("id============" + localStorage.Search__Id);
   
}