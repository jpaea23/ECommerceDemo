using ECommerceDemoApi.Interfaces;
using ECommerceDemoApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace ECommerceDemoApi.AppData.SeedData
{
    public class CartSeed : ICart
    {
        private static List<Cart> carts = new List<Cart>();
        private static int idCount = 0;

        public Cart Get()
        {
            Cart cart = new Cart();
            cart.ID = idCount;
            cart.Products = new List<Product>();
            idCount++;
            carts.Add(cart);

            return cart;
        }

        public double GetShippingCost(Cart cart)
        {
            if (cart.Products.Count == 0)
                return 0;
            else
            {
                double sumOfCosts = cart.Products.Select(x => x.Cost).Sum();
                return (sumOfCosts <= 50) ? 10 : 20;
            }
        }

        public void PlaceOrder(Cart cart)
        {
            carts.Add(cart);
        }

        private Cart GetSingle(int id)
        {
            return carts.FirstOrDefault(cartId => cartId.ID == id);
        }
       
    }
}
