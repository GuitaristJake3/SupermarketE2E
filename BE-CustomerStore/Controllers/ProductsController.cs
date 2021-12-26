using BE_CustomerStore.Data;
using BE_CustomerStore.Products;
using Microsoft.AspNetCore.Mvc;

namespace BE_CustomerStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IStore<Product> _productStore;

        public ProductsController(IStore<Product> productStore)
        {
            _productStore = productStore;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok(await _productStore.Get());
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Product product)
        {
            product.Id = Guid.Empty;

            var id = await _productStore.Add(product);

            return Ok(id);
        }
    }
}
