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
        public string Season { get; set; }
        public string ViewerDiscretion { get; set; }



        [JsonIgnore]
        public virtual IList<Watchlist> Watchlists { get; set; }



        public TvShow()
        {
        }

        public TvShow(int id, string title, string image, string season, string viewerDiscretion)
        {
            Id = id;
            Title = title;
            Image = image;
            Season = season;
            ViewerDiscretion = viewerDiscretion;
        }
    }
}
