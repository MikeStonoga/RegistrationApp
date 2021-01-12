using Microsoft.EntityFrameworkCore;

namespace Registration.Infrastructure.EntityFrameworkCore
{
    public class BaseDbContext<TDbContext> : DbContext where TDbContext : DbContext
    {
        protected BaseDbContext(DbContextOptions<TDbContext> options) : base(options)
        {
        }
    }
}