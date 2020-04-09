using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class TvShowRepository : Repository<TvShow>, IRepository<TvShow>
    {
        public TvShowRepository(QuaranTvContext context) : base(context)
        {
        }
    }
}
