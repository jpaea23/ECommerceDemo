using System.Collections.Generic;

namespace ECommerceDemoApi.Models
{
    public class Cart
    {
        public int ID { get; set; }
        public List<Product> Products { get; set; }
        public double Total { get; set; }
        public double Shipping { get; set; }
        public bool isCheckedOut { get; set; }
    }
}
