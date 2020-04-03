using QuaranTV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV.Repositories
{
    public class UserTvShowRepository : Repository<UserTvShow>, IRepository<UserTvShow>
    {
        public UserTvShowRepository(QuaranTvContext context) : base(context)
        {
        }
    }
}
