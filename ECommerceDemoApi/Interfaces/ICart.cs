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
        double GetShippingCost(Cart cart);
        void PlaceOrder(Cart cart);
    }
}
