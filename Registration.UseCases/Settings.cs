using Microsoft.Extensions.DependencyInjection;
using Registration.UseCases.Users;

namespace Registration.UseCases
{
    public static class UseCaseSettings
    {
        public static IServiceCollection AddUseCasesTransients(this IServiceCollection services)
        {
            services
            #region User
                .AddTransient<IUserReadOnlyUseCasesInteractor, UserReadOnlyUseCasesInteractor>()
                .AddTransient<IUserUseCasesInteractor, UserUseCasesInteractor>()
            #endregion
            ;

            return services;
        }
    }
}
