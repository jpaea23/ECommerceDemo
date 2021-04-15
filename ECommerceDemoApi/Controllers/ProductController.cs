using ECommerceDemoApi.Models;
using ECommerceDemoApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ECommerceDemoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private IService<Product> _service;

        public ProductController(IService<Product> service)
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
            {
                return _service.Add(product);
            }
            else
                return BadRequest();
            
        }

    }
}
