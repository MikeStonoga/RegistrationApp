using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Registration.Domain.Users;
using Registration.Infrastructure.EntityFrameworkCore;
using Registration.Infrastructure.Persistence.EntityFrameworkCore.SqlServer.Users;

namespace Registration.Infrastructure.Persistence.EntityFrameworkCore
{
    public class RegistrationDbContext : BaseDbContext<RegistrationDbContext>, ICurrentDbContext
    {
        public DbContext Context { get; }

        public DbSet<User> Users { get; set; }

        public RegistrationDbContext(DbContextOptions<RegistrationDbContext> options) : base(options)
        {
            Context = this;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UserTypeConfiguration(modelBuilder));
        }
    }

    public class RegistrationDbContextDesignTime : BaseDbContextDesignTime<RegistrationDbContext>
    {
        public RegistrationDbContextDesignTime()
        {
        }
    }
}
