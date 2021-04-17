using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceDemoApi.Models
{
    public class CartRequest
    {
        public int CartId { get; set; }
        public List<Product> Product { get; set; }
    }
}
