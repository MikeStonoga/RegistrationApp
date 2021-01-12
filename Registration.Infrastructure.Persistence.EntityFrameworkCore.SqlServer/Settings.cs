using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Registration.Infrastructure.Persistence.SqlServer;
using Registration.InterfaceAdapters.Gateways.Persistence;
using System;

namespace Registration.Infrastructure.Persistence.EntityFrameworkCore.SqlServer
{
    public static class PersistenceSettings
    {
        public const string DATABASE_NAME = "Registration";
        private const string DATABASE_SERVER_ADDRESS = "127.0.0.1";
        private const string DATABASE_SERVER_PORT = "3306";
        private const string DATABASE_USER = "root";
        private const string DATABASE_USER_PASSWORD = "";

        public static readonly string ConnectionString = $"Server=localhost;Database={DATABASE_NAME};Trusted_Connection=True;";



        public static IServiceCollection UseSqlServer<TDbContext>(this IServiceCollection services) where TDbContext : DbContext, ICurrentDbContext
        {
            services.AddDbContext<TDbContext>(options => options.UseSqlServer(ConnectionString)) ;

            services.AddTransient<ICurrentDbContext, TDbContext>();

            return services;
        }

        public static IServiceCollection AddSqlServerPersistenceScopeds(this IServiceCollection services)
        {
            services.AddPersistenceScopeds(typeof(ReadOnlyRepository<>), typeof(IReadOnlyRepository<>), typeof(Repository<>));
            return services;
        }

        public static IServiceCollection AddPersistenceScopeds(this IServiceCollection services, Type readOnlyImplementation, Type readOnlyInterface, Type manipulationImplementation)
        {
            services
                .AddScoped(typeof(IReadOnlyPersistenceGateway<>), readOnlyImplementation)
                .AddScoped(readOnlyInterface, readOnlyImplementation)
                .AddScoped(typeof(IManipulationPersistenceGateway<>), manipulationImplementation)
                ;

            return services;
        }

    }
}
