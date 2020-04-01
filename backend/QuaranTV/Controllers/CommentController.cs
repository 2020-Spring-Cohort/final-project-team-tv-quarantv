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
    public class CommentController : ControllerBase
    {
        IRepository<Comment> commentRepo;

        public CommentController(IRepository<Comment> commentRepo)
        {
            this.commentRepo = commentRepo;
        }

        // GET: api/Placeholder
        [HttpGet]
        public IEnumerable<Comment> Get()
        {
            return commentRepo.GetAll();
        }

        // GET: api/Placeholder/5
        [HttpGet("{id}")]
        public Comment Get(int id)
        {
            return commentRepo.GetById(id);
        }

        // POST: api/Placeholder
        [HttpPost]
        public IEnumerable<Comment> Post([FromBody] Comment value)
        {
            commentRepo.Create(value);
            return commentRepo.GetAll();
        }

        // PUT: api/Placeholder/5
        [HttpPut("{id}")]
        public IEnumerable<Comment> Put([FromBody] Comment value)
        {
            commentRepo.Update(value);
            return commentRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<Comment> Delete(int id)
        {
            var comment = commentRepo.GetById(id);
            commentRepo.Delete(comment);
            return commentRepo.GetAll();
        }
    }
}
