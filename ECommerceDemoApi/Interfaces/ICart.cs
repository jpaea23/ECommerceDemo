using ECommerceDemoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceDemoApi.Interfaces
{
    public interface ICart
    {
        Cart Get();
        Cart AddProduct(int id, Product product);
    }
}
