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

        public Cart AddProduct(int id, Product product)
        {
            Cart cart = GetSingle(id);
            cart.Products.Add(product);
            cart.Total = CalculateProducts(cart);
            cart.Shipping = (cart.Total < 50) ? 10 : 20;

            return cart;
        }

        public Cart Get()
        {
            // TODO: Add logic to maintain user Cart instance if related User previously had an existing cart available
            Cart cart = new Cart();
            cart.ID = idCount;
            cart.Products = new List<Product>();
            idCount++;
            carts.Add(cart);

            return cart;
        }

        public Cart GetSingle(int id)
        {
            return carts.FirstOrDefault(cartId => cartId.ID == id);
        }

        private double CalculateProducts(Cart cart)
        {
           return cart.Products.Select(product => product.Cost).Sum();
        }
    }
}
