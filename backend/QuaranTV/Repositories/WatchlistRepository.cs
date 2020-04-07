using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class WatchlistRepository : Repository<Watchlist>, IRepository<Watchlist>
    {
        private QuaranTvContext db;
        public WatchlistRepository(QuaranTvContext context) : base(context)
        {
            db = context;
        }

        public IEnumerable<Watchlist> GetByUserId(int id)
        {
            return db.Watchlists.Where(w => w.UserId == id).ToList();
        }
    }
}
