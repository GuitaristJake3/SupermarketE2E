using BE_CustomerStore.Products;
using Microsoft.EntityFrameworkCore;

namespace BE_CustomerStore.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {

        }

        public DbSet<Product> Products { get; internal set; }
    }
}
