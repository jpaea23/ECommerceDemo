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
                return Ok(cart);
            else
                return BadRequest();
        }

        [HttpPost]
        [Route("ShippingCost")]
        public ActionResult<double> GetshippingCost([FromBody]Cart cart)
        {
            return Ok(_service.GetShippingCost(cart));
        }

        [HttpPost]
        [Route("PlaceOrder")]
        public ActionResult PlaceOrder([FromBody] Cart cart)
        {
            _service.PlaceOrder(cart);
            return Ok();
        }
    }
}
