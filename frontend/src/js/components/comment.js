export default function Comments(comments){
    return `
    <h2>All Comments</h2>
        <div class="comments__grid_container">
            ${comments.map(comments => {
                return `
                <ul class="comments">
                <li>
                <h4>${comments.CommentText}</h4>
                </ul>
               `
        }).join("")}
        </div>

        <!--- Add Comments here --->
        <section class="add-comment">    
        <label>Post a Comment</label>
        </br>
        <input class="add-commentText" type="text" placeholder="Add a Comment">
        </br>
        <button class="add-comment__submit">Add a Comment</button>       
        </section>
    `
}