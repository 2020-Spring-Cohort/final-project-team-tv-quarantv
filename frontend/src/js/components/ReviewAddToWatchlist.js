export default function ReviewAddToWatchlist(watch){
    
    return `
     <section class="update-Watched">
     <label>Tv Show Title</label><br>
     <h4>${watch.tvShow.title}</h4><br> 
     
     
     <label>Review</label><br>
     <textarea class="update-review" rows="4" cols="50" ></textarea><br><br>

     <label >Rating</label><br>
    
     <select class="update-rating" type="dropdown">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>     
     <option value="4">4</option>
     <option value="5">5</option>   
     </select><br><br>

     <input class="update-status" type="hidden" value="${watch.status}">
     <input class="watch__id" type="hidden" value="${watch.id}">
     <input class="user__id" type="hidden" value="${watch.userId}">
     <input class="tv__id" type="hidden" value="${watch.tvShowId}">
        
     <button class="addReview-watchList__submit">Add Review</button>
     </section>
 
 `;
}