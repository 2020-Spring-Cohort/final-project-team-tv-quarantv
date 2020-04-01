using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class UserTvShow
    {
        public int UserId { get; set; }
        public string Name { get; set; }

        public int TvShowId { get; set; }
        public string Title { get; set; }
    }
}
