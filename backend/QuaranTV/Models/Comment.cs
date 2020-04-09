using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string CommentText { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; }
        public int UserId { get; set; }

        public Comment()
        {
        }

        public Comment(int id, string commentText)
        {
            Id = id;
            CommentText = commentText;
        }
    }
}
