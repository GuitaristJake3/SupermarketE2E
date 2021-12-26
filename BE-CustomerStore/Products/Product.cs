using BE_CustomerStore.Data;

namespace BE_CustomerStore.Products
{
    public class Product : IEntity
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Price { get; set; }
    }
}
