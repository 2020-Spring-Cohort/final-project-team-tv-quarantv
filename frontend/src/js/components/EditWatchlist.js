export default function EditWatchlist(watch){
    if(watch.status == "Watched")
  
    return `
     <section class="update-Watched">
     <h3><b>Edit Album</b></h3><br>
     <label>Tv Show Title</label><br>
     <h4>${watch.tvShow.title}</h4><br> 
 
     <p>Update the Status</p>
     <select class="update-status add-album-style" type="dropdown">
     <option value="Watched">Watched</option>
     <option value="ToBeWatched">To Be Watched</option>
     <option value="Watching">Watching</option>       
     </select>
 
     <br><br>
     <label >Review</label><br>
     <input class="update-review add-album-style" type="text" value="${watch.review}"><br><br>
     <label >Rate</label><br>
     <input class="update-rating add-album-style" type="text" value="${watch.rating}"><br><br> 
     <input class="watch__id add-album-style" type="hidden" value="${watch.id}">
     <input class="user__id add-album-style" type="hidden" value="${watch.userId}">
     <input class="tv__id add-album-style" type="hidden" value="${watch.tvShowId}">
        
     <button class="update-watchList__submit add-album-style">Save Changes</button>
     </section>
 
 `;
 
 if(watch.status == "Watching")
  
 return `
 <section class="update-Watched">
 <h3><b>Edit Album</b></h3><br>
 <label>Tv Show Title</label><br>
 <h4>${watch.tvShow.title}</h4><br>  
 
 <p>Update the Status</p>
 <select class="update-status add-album-style" type="dropdown">
 <option value="Watched">Watched</option>
 <option value="ToBeWatched">To Be Watched</option>
 <option value="Watching">Watching</option>      
 </select>
 
 <br><br>
 <label >Review</label><br>
 <input class="update-review add-album-style" type="text" value="${watch.review}"><br><br>
 <label >Rate</label><br>
 <input class="update-rating add-album-style" type="text" value="${watch.rating}"><br><br> 
 <input class="watch__id add-album-style" type="hidden" value="${watch.id}">
 <input class="user__id add-album-style" type="hidden" value="${watch.userId}">
 <input class="tv__id add-album-style" type="hidden" value="${watch.tvShowId}">
    
 <button class="update-watchList__submit add-album-style">Save Changes</button>
 </section>
 
 `;
 
 
 if(watch.status == "ToBeWatched")
  
 return `
 <section class="update-Watched">
 <h3><b>Edit Album</b></h3><br>
 <label>Tv Show Title</label><br>
 <h4>${watch.tvShow.title}</h4><br>  
 
 <p>Update the Status</p>
 <select class="update-status add-album-style" type="dropdown">
 <option value="ToBeWatched">To Be Watched</option>
 <option value="Watching">Watching</option>    
 <option value="Watched">Watched</option>   
 </select>
 
 <br><br>
 <label >Review</label><br>
 <input class="update-review add-album-style" type="text" value="${watch.review}"><br><br>
 <label >Rate</label><br>
 <input class="update-rating add-album-style" type="text" value="${watch.rating}"><br><br> 
 <input class="watch__id add-album-style" type="hidden" value="${watch.id}">
 <input class="user__id add-album-style" type="hidden" value="${watch.userId}">
 <input class="tv__id add-album-style" type="hidden" value="${watch.tvShowId}">
    
 <button class="update-watchList__submit add-album-style">Save Changes</button>
 </section>
 
 `;
 
 
 }
 
 