using System.ComponentModel.DataAnnotations;

namespace ECommerceDemoApi.Models
{
    public class Product
    {
        [Required(ErrorMessage = "Please provide a product ID")]
        public int ID { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Please provide a name for your product")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Please provide a product cost")]
        public decimal Cost { get; set; }
        public string Description { get; set; }
    }
}
