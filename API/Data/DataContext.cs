using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions contextOptions) : base(contextOptions)
        {
            
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
