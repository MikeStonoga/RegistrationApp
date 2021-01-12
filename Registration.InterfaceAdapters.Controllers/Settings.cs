using Microsoft.Extensions.DependencyInjection;
using Registration.InterfaceAdapters.Controllers.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.InterfaceAdapters.Controllers
{
    public static class ControllerSettings
    {
        public static IServiceCollection AddControllersTransients(this IServiceCollection services)
        {
            services
            #region User
                .AddTransient<IUserReadOnlyController, UserReadOnlyController>()
                .AddTransient<IUserController, UserController>()
            #endregion
            ;

            return services;
        }
    }
}
