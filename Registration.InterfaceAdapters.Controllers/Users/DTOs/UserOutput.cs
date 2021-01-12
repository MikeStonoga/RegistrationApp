using Registration.Domain.Users;
using Registration.InterfaceAdapters.Controllers.DTOs;
using System;

namespace Registration.InterfaceAdapters.Controllers.Users.DTOs
{
    public class UserOutput : FullAuditedEntityDTO<User>.Output
    {
        public string EmailAddress { get; private set; }
        public DateTime BirthDate { get; private set; }
        public string FormattedBirthDate => BirthDate.ToString("dd/MM/yyyy");
        public EducationLevels EducationLevel { get; set; }
        public string EducationLevelName => EducationLevel.ToString();
        public UserOutput() { }
        public UserOutput(User user) : base(user)
        {
            EmailAddress = user.Email.Address;
            BirthDate = user.BirthDate.Date;
            EducationLevel = user.EducationLevel;
        }
    }
}
