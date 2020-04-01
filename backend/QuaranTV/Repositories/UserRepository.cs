using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class UserRepository : Repository<User>, IRepository<User>
    {
        public UserRepository(QuaranTvContext context) : base(context)
        {
        }
    }
}
