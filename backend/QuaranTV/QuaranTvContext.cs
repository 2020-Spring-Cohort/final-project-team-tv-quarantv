using Microsoft.EntityFrameworkCore;
using QuaranTV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV
{
    public class QuaranTvContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<TvShow> TvShows { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Comment> Comments { get; set; }
      
      
    }
}
