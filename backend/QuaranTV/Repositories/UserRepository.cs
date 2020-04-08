using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuaranTV.Models;

namespace QuaranTV.Repositories
{
    public class UserRepository : Repository<User>, IRepository<User>
    {
        private QuaranTvContext db;
        public UserRepository(QuaranTvContext context) : base(context)
        {
            db = context;
        }
        public IEnumerable<User> GetByUserId(int id)
        {
            return db.Users.Where(w => w.Id == id).ToList();
        }
    }
}
