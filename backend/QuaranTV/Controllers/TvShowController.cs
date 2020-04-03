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
    public class TvShowController : ControllerBase
    {
        IRepository<TvShow> tvShowRepo;

        public TvShowController(IRepository<TvShow> tvShowRepo)
        {
            this.tvShowRepo = tvShowRepo;
        }

        // GET: api/Placeholder
        [HttpGet]
        public IEnumerable<TvShow> Get()
        {
            return tvShowRepo.GetAll();
        }

        // GET: api/Placeholder/5
        [HttpGet("{id}")]
        public TvShow Get(int id)
        {
            return tvShowRepo.GetById(id);
        }

        // POST: api/Placeholder
        [HttpPost]
        public IEnumerable<TvShow> Post([FromBody] TvShow value)
        {
            tvShowRepo.Create(value);
            return tvShowRepo.GetAll();
        }

        // PUT: api/Placeholder/5
        [HttpPut("{id}")]
        public IEnumerable<TvShow> Put([FromBody] TvShow value)
        {
            tvShowRepo.Update(value);
            return tvShowRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<TvShow> Delete(int id)
        {
            var tvShow = tvShowRepo.GetById(id);
            tvShowRepo.Delete(tvShow);
            return tvShowRepo.GetAll();
        }
    }
}
