using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class WatchlistRepository : Repository<Watchlist>, IRepository<Watchlist>
    {
        public WatchlistRepository(QuaranTvContext context) : base(context)
        {
        }
    }
}
