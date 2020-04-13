export default function EditWatchlist(watch){
    if(watch.status == "Watched")
  
    return `
     <section class="update-Watched">
     <label>Tv Show Title</label><br>
     <h4>${watch.tvShow.title}</h4><br> 
 
     <p>Update the Status</p>
     <select class="update-status" type="dropdown">
     <option value="Watched">Watched</option>
     <option value="ToBeWatched">To Be Watched</option>
     <option value="Watching">Watching</option>       
     </select>
 
     <br><br>
     <label >Review</label><br>
     <input class="update-review" type="text" value="${watch.review}"><br><br>
     <label >Rating</label><br>
     <select class="update-rating" type="dropdown">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>     
     <option value="4">4</option>
     <option value="5">5</option>   
     </select><br><br>

     <input class="watch__id" type="hidden" value="${watch.id}">
     <input class="user__id" type="hidden" value="${watch.userId}">
     <input class="tv__id" type="hidden" value="${watch.tvShowId}">
        
     <button class="update-watchList__submit">Save Changes</button>
     </section>
 `;
 
 if(watch.status == "Watching")
  
 return `
 <section class="update-Watched">
 <label>Tv Show Title</label><br>
 <h4>${watch.tvShow.title}</h4><br>  
 
 <p>Update the Status</p>
 <select class="update-status" type="dropdown">
 <option value="Watched">Watched</option>
 <option value="ToBeWatched">To Be Watched</option>
 <option value="Watching">Watching</option>      
 </select>
 
 <br><br>
 <label >Review</label><br>
 <input class="update-review" type="text" value="${watch.review}"><br><br>
 <label >Rating</label><br>
 <input class="update-rating" type="text" value="${watch.rating}"><br><br> 
 <input class="watch__id" type="hidden" value="${watch.id}">
 <input class="user__id" type="hidden" value="${watch.userId}">
 <input class="tv__id" type="hidden" value="${watch.tvShowId}">
    
 <button class="update-watchList__submit">Save Changes</button>
 </section>
 
 `;
 
 
 if(watch.status == "ToBeWatched")
  
 return `
 <section class="update-Watched">
 <label>Tv Show Title</label><br>
 <h4>${watch.tvShow.title}</h4><br>  
 
 <p>Update the Status</p>
 <select class="update-status" type="dropdown">
 <option value="ToBeWatched">To Be Watched</option>
 <option value="Watching">Watching</option>    
 <option value="Watched">Watched</option>   
 </select>
 
 <br><br>
 <label >Review</label><br>
 <input class="update-review" type="text" value="${watch.review}"><br><br>
 <label >Rating</label><br>
 <input class="update-rating" type="text" value="${watch.rating}"><br><br> 
 <input class="watch__id" type="hidden" value="${watch.id}">
 <input class="user__id" type="hidden" value="${watch.userId}">
 <input class="tv__id" type="hidden" value="${watch.tvShowId}">
    
 <button class="update-watchList__submit">Save Changes</button>
 </section>
 
 `;
 
 
 }
 
 