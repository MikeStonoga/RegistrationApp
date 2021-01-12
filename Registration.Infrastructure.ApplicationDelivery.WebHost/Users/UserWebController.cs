using Registration.Domain.Users;
using Registration.InterfaceAdapters.Controllers.Users;
using Registration.InterfaceAdapters.Controllers.Users.DTOs;

namespace Registration.Infrastructure.ApplicationDelivery.WebHost.Users
{
    public class UserController : BaseManipulationWebController<User, UserInput, UserOutput, IUserController>
    {
        public UserController(IUserController manipulationController) : base(manipulationController)
        {
        }
    }
}
