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
    `
}