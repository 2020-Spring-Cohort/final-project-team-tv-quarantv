using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV.Models
{
    public class TvShow
    {
        public int TvShowId { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int Season { get; set; }
        //public int Episode { get; set; }
        public string Rating { get; set; }
    }
}
