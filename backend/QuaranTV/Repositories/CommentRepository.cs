using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class CommentRepository : Repository<Comment>, IRepository<Comment>
    {
        private QuaranTvContext db;
        public CommentRepository(QuaranTvContext context) : base(context)
        {
            db = context;
        }
        public override IEnumerable<Comment> GetByTvShowId(int id)
        {
            return db.Comments.Where(w => w.TvShowId == id).ToList();
        }
    }
}
