using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class UserTvShow
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int TvShowId { get; set; }
        public virtual TvShow TvShow { get; set; }
    }
}
