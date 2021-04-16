using ECommerceDemoApi.Interfaces;
using ECommerceDemoApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ECommerceDemoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private ICart _service;

        public CartController(ICart service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<Cart> Get()
        {
            Cart cart = _service.Get();
            if (cart != null)
            {
                return Ok(cart);
            }
            else
                return BadRequest();
        }

        [HttpPost]
        public ActionResult<Cart> Post(int id, [FromBody]Product product)
        {
            Product addProduct = new Product
            {
                ID = product.ID,
                Name = product.Name,
                Description = product.Description,
                Cost = product.Cost
            };

            return Ok(_service.AddProduct(id, addProduct));
        }
    }
}
