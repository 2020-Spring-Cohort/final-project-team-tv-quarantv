using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Body { get; set; }
        public string Rating { get; set; }

        public virtual ICollection<User> Users { get; set; }

        [JsonIgnore]
        public virtual TvShow TvShow { get; set; }
        public virtual int TvShowId { get; set; }

        public Comment()
        {
        }

        public Comment(int id, string body, string rating)
        {
            CommentId = id;
            Body = body;
            Rating = rating;
        }
    }
}
