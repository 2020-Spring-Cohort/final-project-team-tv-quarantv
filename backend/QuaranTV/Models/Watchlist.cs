using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class Watchlist
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public string Review { get; set; }
        public string Rating { get; set; }




        [JsonIgnore]
        public virtual User User { get; set; }
        public int UserId { get; set; }

        [JsonIgnore]
        public virtual TvShow TvShow { get; set; }
        public int TvShowId { get; set; }
        



        public Watchlist()
        {
        }

        public Watchlist(int id, string review, string rating)
        {
            Id = id;
            Review = review;
            Rating = rating;
        }
    }
}
