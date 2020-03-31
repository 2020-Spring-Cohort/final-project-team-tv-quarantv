using QuaranTV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV.Repositories
{
    public class CommentRepository : Repository<Comment>, IRepository<Comment>
    {
        public CommentRepository(QuaranTvContext context) : base(context)
        {
        }
    }
}
