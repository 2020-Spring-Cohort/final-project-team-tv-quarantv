using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuaranTV.Models;
using QuaranTV.Repositories;

namespace QuaranTV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTvShowController : ControllerBase
    {

        IRepository<UserTvShow> userTvShowRepo;

        public UserTvShowController(IRepository<UserTvShow> userTvShowRepo)
        {
            this.userTvShowRepo = userTvShowRepo;
        }

        // GET: api/Placeholder
        [HttpGet]
        public IEnumerable<UserTvShow> Get()
        {
            return userTvShowRepo.GetAll();
        }

        // GET: api/Placeholder/5
        [HttpGet("{id}")]
        public UserTvShow Get(int id)
        {
            return userTvShowRepo.GetById(id);
        }

        // POST: api/Placeholder
        [HttpPost]
        public IEnumerable<UserTvShow> Post([FromBody] UserTvShow value)
        {
            userTvShowRepo.Create(value);
            return userTvShowRepo.GetAll();
        }

        // PUT: api/Placeholder/5
        [HttpPut("{id}")]
        public IEnumerable<UserTvShow> Put([FromBody] UserTvShow value)
        {
            userTvShowRepo.Update(value);
            return userTvShowRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<UserTvShow> Delete(int id)
        {
            var userTvShow = userTvShowRepo.GetById(id);
            userTvShowRepo.Delete(userTvShow);
            return userTvShowRepo.GetAll();
        }
    }
}
