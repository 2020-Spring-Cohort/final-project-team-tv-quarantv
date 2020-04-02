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
        public string Body { get; set; }
        public string Rating { get; set; }




        [JsonIgnore]
        public virtual User User { get; set; }
        public int UserId { get; set; }

        [JsonIgnore]
        public virtual TvShow TvShow { get; set; }
        public int TvShowId { get; set; }
        



        public Comment()
        {
        }

        public Comment(int id, string body, string rating)
        {
            Id = id;
            Body = body;
            Rating = rating;
        }
    }
}
