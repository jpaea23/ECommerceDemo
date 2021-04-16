using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerceDemoApi.Models;

namespace ECommerceDemoApi.Interfaces
{
    public interface IProduct
    {
        Product Add(Product product);
        IEnumerable<Product> GetAllPaged(int currentPage, int pageSize);
    }
}
