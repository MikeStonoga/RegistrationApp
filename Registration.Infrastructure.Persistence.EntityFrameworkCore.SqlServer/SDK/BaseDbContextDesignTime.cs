using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Registration.Infrastructure.Persistence.EntityFrameworkCore.SqlServer;

namespace Registration.Infrastructure.EntityFrameworkCore
{
    public abstract class BaseDbContextDesignTime<TDbContext> : IDesignTimeDbContextFactory<TDbContext> where TDbContext : DbContext
    {

        public BaseDbContextDesignTime()
        {
        }
        
        public TDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<TDbContext>();
            optionsBuilder.UseSqlServer(PersistenceSettings.ConnectionString);

            return Activator.CreateInstance(typeof(TDbContext), optionsBuilder.Options) as TDbContext;
        }
    }
}