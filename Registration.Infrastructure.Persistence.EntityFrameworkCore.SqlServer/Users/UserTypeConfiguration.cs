using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Registration.Domain.Users;
using System.Text;

namespace Registration.Infrastructure.Persistence.EntityFrameworkCore.SqlServer.Users
{
    public class UserTypeConfiguration : IEntityTypeConfiguration<User>
    {
        private readonly string _defaultSchema;

        public UserTypeConfiguration(ModelBuilder modelBuilder)
        {
            _defaultSchema = modelBuilder.Model.GetDefaultSchema();
        }

        public void Configure(EntityTypeBuilder<User> configuration)
        {
            configuration.ToTable("Users", _defaultSchema);

            configuration.HasKey(e => e.Id);
            configuration.OwnsOne(e => e.Name);
            configuration.OwnsOne(e => e.Email).HasIndex(e => e.Address);
            configuration.OwnsOne(e => e.BirthDate);
        }
    }
}
