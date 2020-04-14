export default function TvShows(tvShows){
    var  WatchedSum =0;
    var WatchingSum =0;
    var RatingSum =0;
    var Watched =[];
    var ToBeWatched =[];
    var Watching =[];
    var Count = 0; 
    var Stars=0;
    return `
    <section class="tvShows">
        <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {   
                WatchedSum=0;  
                WatchingSum=0; 
                Stars=0;  
                Count = 0;  
                WatchingSum =0;
                RatingSum=0;

                  tvShow.watchlists.forEach(element => {
                    if(tvShow.id == element.tvShowId)
                    {
                        if(element.status == "Watched")
                        {
                            Watched.push(element.user.name , tvShow.title ,element.rating);
                            WatchedSum ++;
                            if(element.rating != null)
                            {
                              RatingSum +=  eval (element.rating);                              
                              Count++;
                            //  alert("rateing ="+ element.rating)
                            }  
                          
                        }
                       

                        if(element.status == "ToBeWatched")
                        {
                            ToBeWatched.push(element.user.name , tvShow.title );
                            //ToBeWatchedSum ++;
                        }
                       

                        if(element.status == "Watching")
                        {
                            Watching.push(element.user.name , tvShow.title );
                            WatchingSum ++;
                        }

                           
                    }   
                           
                 });     
                 Stars = (RatingSum / Count);
                 if(Stars >= 1)
                 {
                    if(Stars >= 1 && Stars <2)
                    return `             
                   
                    <div class="tvShows__specific_tvShow">
                        <artice>
                            <h4 class="tvShows__show_title">${tvShow.title} 
                            <h3>Watched = ${WatchedSum}</h3><br>
                            <h3>Watching = ${WatchingSum}</h3><br>  
                            <h3>Rating = ${Stars}<br><img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                            <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                            <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                            <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                            </h3><br>
                            <p class="p_title-hover-btn">>></p></h4>
                            <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                            <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                        <artice>
                        <div class ="dropdown-content">
                            <p class="p-dropdown">Start Watching</p>
                            <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                            <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                            </br>
                            <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                            <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                        </div>
                    </div>
                   `
                   if(Stars >= 2 && Stars <3)
                   return `             
                  
                   <div class="tvShows__specific_tvShow">
                       <artice>
                           <h4 class="tvShows__show_title">${tvShow.title} 
                           <h3>Watched = ${WatchedSum}</h3><br>
                           <h3>Watching = ${WatchingSum}</h3><br>  
                           <h3>Rating = ${Stars}<br><img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                           <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        
                           </h3><br>
                           <p class="p_title-hover-btn">>></p></h4>
                           <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                           <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                       <artice>
                       <div class ="dropdown-content">
                           <p class="p-dropdown">Start Watching</p>
                           <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                           <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                           </br>
                           <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                           <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                       </div>
                   </div>
                  `
                  if(Stars >= 3 && Stars <4)
                  return `             
                 
                  <div class="tvShows__specific_tvShow">
                      <artice>
                          <h4 class="tvShows__show_title">${tvShow.title} 
                          <h3>Watched = ${WatchedSum}</h3><br>
                          <h3>Watching = ${WatchingSum}</h3><br>  
                          <h3>Rating = ${Stars}<br><img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                          <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                          <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                         
                          </h3><br>
                          <p class="p_title-hover-btn">>></p></h4>
                          <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                          <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                      <artice>
                      <div class ="dropdown-content">
                          <p class="p-dropdown">Start Watching</p>
                          <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                          <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                          </br>
                          <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                          <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                      </div>
                  </div>
                 `
                 if(Stars >= 4 && Stars <5)
                return `             
               
                <div class="tvShows__specific_tvShow">
                    <artice>
                        <h4 class="tvShows__show_title">${tvShow.title} 
                        <h3>Watched = ${WatchedSum}</h3><br>
                        <h3>Watching = ${WatchingSum}</h3><br>  
                        <h3>Rating = ${Stars}<br><img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3><br>
                        <p class="p_title-hover-btn">>></p></h4>
                        <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                        <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                    <artice>
                    <div class ="dropdown-content">
                        <p class="p-dropdown">Start Watching</p>
                        <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                        <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                        </br>
                        <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                        <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                    </div>
                </div>
               `
               if(Stars >= 5)
               return `             
              
               <div class="tvShows__specific_tvShow">
                   <artice>
                       <h4 class="tvShows__show_title">${tvShow.title} 
                       <h3>Watched = ${WatchedSum}</h3><br>
                       <h3>Watching = ${WatchingSum}</h3><br>  
                       <h3>Rating = ${Stars}<br><img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                       </h3><br>
                       <p class="p_title-hover-btn">>></p></h4>
                       <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                       <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                   <artice>
                   <div class ="dropdown-content">
                       <p class="p-dropdown">Start Watching</p>
                       <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                       <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                       </br>
                       <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                       <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                   </div>
               </div>
              `
                 }
               else 
             
              
               return `             
              
               <div class="tvShows__specific_tvShow">
                   <artice>
                       <h4 class="tvShows__show_title">${tvShow.title} 
                       <h3>Watched = ${WatchedSum}</h3><br>
                       <h3>Watching = ${WatchingSum}</h3><br> 
                       <p class="p_title-hover-btn">>></p></h4>
                       <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                       <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                   <artice>
                   <div class ="dropdown-content">
                       <p class="p-dropdown">Start Watching</p>
                       <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                       <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                       </br>
                       <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                       <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                   </div>
               </div>
              `
            }).join("")}


            
        </div>
    </section>
    `
}
/*
 <div class="tvShowSelection__text_area">
                ${tvShow.watchlists.map(value => {
                    return `
                    <div class="tvShowSelection__specific_user"
                        <p></p>
                        <h4 class="users__name_btn">Name: ${value.user.name}</h4>
                        <h4 class="users__show_status">Status: ${value.status}</h4>
                        <h4 class="users__show__rating">Rating: ${value.rating}</h4>
                        <h4 class="users__show_review">Review: ${value.review}</h4>
                        <input class="users__id" type="hidden" value="${value.userId}">
                    </div>
                    `
                }).join("")}
            </div>

*/