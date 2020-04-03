using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class TvShow
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public int Season { get; set; }
        public string ViewerDiscretion { get; set; }





        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }

        [JsonIgnore]
        public virtual IList<UserTvShow> UserTvShows { get; set; }




        public TvShow()
        {
        }

        public TvShow(int id, string title, string image, int season, string viewerDiscretion)
        {
            Id = id;
            Title = title;
            Image = image;
            Season = season;
            ViewerDiscretion = viewerDiscretion;
        }
    }
}
