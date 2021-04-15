using ECommerceDemoApi.Models;
using ECommerceDemoApi.Services;
using System.Collections.Generic;
using System.Linq;

namespace ECommerceDemoApi.AppData.SeedData
{
    public class ProductSeed : IService<Product>
    {
        // TODO: Remove this
        private static List<Product> Products = new List<Product>()
        {
            { new Product { ID = 1, Name = "Test1", Cost = 10, Description = "Test1"} },
            { new Product { ID = 2, Name = "Test2", Cost = 10, Description = "Test2"} },
            { new Product { ID = 3, Name = "Test3", Cost = 10, Description = "Test3"} },
            { new Product { ID = 4, Name = "Test4", Cost = 10, Description = "Test4"} },
            { new Product { ID = 5, Name = "Test5", Cost = 10, Description = "Test5"} },
            { new Product { ID = 6, Name = "Test6", Cost = 10, Description = "Test6"} },
            { new Product { ID = 7, Name = "Test7", Cost = 10, Description = "Test7"} },
            { new Product { ID = 8, Name = "Test8", Cost = 10, Description = "Test8"} },
        };

        public Product Add(Product entity)
        {
            Products.Add(entity);
            return entity;
        }

        public IEnumerable<Product> GetAllPaged(int pageSize, int currentPage)
        {
            int start = pageSize * (currentPage - 1);
            int end = start + pageSize;

            bool isProduct(int index)
            {
                return index >= start
                    && index < end;
            }

            return Products.Where((_,index) => isProduct(index));
        }
    }
}
