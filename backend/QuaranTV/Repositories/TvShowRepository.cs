using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class TvShowRepository : Repository<TvShow>, IRepository<TvShow>
    {
        private QuaranTvContext db;
        public TvShowRepository(QuaranTvContext context) : base(context)
        {
            db = context;
        }
        public IEnumerable<TvShow> GetByUserId(int id)
        {
            return db.TvShows.Where(w => w.Id == id).ToList();
        }
    }
}
