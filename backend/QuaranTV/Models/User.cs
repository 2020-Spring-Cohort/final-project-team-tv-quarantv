using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace QuaranTV.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }




        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }

        [JsonIgnore]
        public virtual IList<UserTvShow> UserTvShows { get; set; }





        public User()
        {
        }

        public User(int id, string name, string image)
        {
            Id = id;
            Name = name;
            Image = image;
        }
    }
}
