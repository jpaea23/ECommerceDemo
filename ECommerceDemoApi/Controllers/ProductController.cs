using ECommerceDemoApi.Interfaces;
using ECommerceDemoApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceDemoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private IProduct _service;

        public ProductController(IProduct service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult Get(int pageSize, int currentPage)
        {
            return Ok(_service.GetAllPaged(pageSize, currentPage));
        }

        [HttpPost]
        public ActionResult<Product> Post(Product product)
        {
            if (ModelState.IsValid)
                return _service.Add(product);
            else
                return BadRequest();
            
        }

    }
}
