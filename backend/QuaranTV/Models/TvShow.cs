using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class TvShow
    {
        public int TvShowId { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public int Season { get; set; }
        public string Rating { get; set; }

        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<User> Users { get; set; }

        public IList<UserTvShow> UserTvShows { get; set; }

        public TvShow()
        {
        }

        public TvShow(int id, string name, string image, int season, string rating)
        {
            TvShowId = id;
            Title = title;
            Image = image;
            Season = season;
            Rating = rating;
        }
    }
}
