using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Body { get; set; }
        public string Rating { get; set; }
    }
}
