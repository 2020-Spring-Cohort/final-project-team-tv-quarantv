export default function CommentsByTvShow(comments){
    return `
    <h2>All Comments</h2>
        <div class="comments__grid_container">
            ${comments.map(comments => {
                return `
                <ul class="comments">
                <li>
                <p>${comments.user.name} writes:<p>
                <p>${comments.commentText}</p>
                </li>
                </ul>
               `
        }).join("")}
        </div>

        <!--- Add Comments here --->
        <section class="add-comment">
            <label>Post a Comment</label>
            </br>
            <textarea class="add-commentText" type="text" rows="5" cols="33" placeholder="Add a Comment"></textarea>
            </br>
            <button class="add-comment__submit">Add a Comment</button>       
        </section>
    `
}