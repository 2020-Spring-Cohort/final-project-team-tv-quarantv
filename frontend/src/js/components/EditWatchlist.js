export default function EditWatchlist(watch){
    if(watch.status == "Watched")
  
    return `
     <section class="update-Watched">
     <h4>${watch.tvShow.title}</h4><br> 
 
     <p>Update the Status</p>
     <select class="update-status" type="dropdown">
     <option value="Watched">Watched</option>
     <option value="ToBeWatched">To Be Watched</option>
     <option value="Watching">Watching</option>       
     </select>
 
     <br>
     <label >Review</label><br>
     <input class="update-review" type="text" value="${watch.review}"><br>
     <label >Rate</label><br>
     <input class="update-rating" type="text" value="${watch.rating}"><br>
     <input class="watch__id" type="hidden" value="${watch.id}">
     <input class="user__id" type="hidden" value="${watch.userId}">
     <input class="tv__id" type="hidden" value="${watch.tvShowId}">
        
     <button class="update-watchList__submit">Save Changes</button>
     </section>
 
 `;
 
 if(watch.status == "Watching")
  
 return `
 <section class="update-Watched">
 <h4>${watch.tvShow.title}</h4><br>  
 
 <p>Update the Status</p>
 <select class="update-status" type="dropdown">
 <option value="Watched">Watched</option>
 <option value="ToBeWatched">To Be Watched</option>
 <option value="Watching">Watching</option>      
 </select>
 
 <br>
 <label >Review</label><br>
 <input class="update-review" type="text" value="${watch.review}"><br>
 <label >Rate</label><br>
 <input class="update-rating" type="text" value="${watch.rating}"><br>
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
 <option value="Watched">To Be Watched</option>
 <option value="ToBeWatched">Watching</option>    
 <option value="Watching">Watched</option>   
 </select>
 
 <br>
 <label >Review</label><br>
 <input class="update-review" type="text" value="${watch.review}"><br>
 <label >Rate</label><br>
 <input class="update-rating" type="text" value="${watch.rating}"><br>
 <input class="watch__id" type="hidden" value="${watch.id}">
 <input class="user__id" type="hidden" value="${watch.userId}">
 <input class="tv__id" type="hidden" value="${watch.tvShowId}">
    
 <button class="update-watchList__submit">Save Changes</button>
 </section>
 
 `;
 
 
 }
 
 