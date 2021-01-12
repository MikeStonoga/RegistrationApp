using Registration.Domain.Extensions;
using Registration.Domain.SDK.ValueObjects;
using Registration.Domain.Users;
using Registration.Domain.ValueObjects;
using Registration.InterfaceAdapters.Controllers.DTOs;
using Registration.InterfaceAdapters.Gateways.Persistence;
using System;
using System.Threading.Tasks;

namespace Registration.InterfaceAdapters.Controllers.Users.DTOs
{
    public class UserInput : FullAuditedEntityDTO<User>.Input
    {
        public string EmailAddress { get; set; }
        public DateTime BirthDate { get; set; }
        public EducationLevels EducationLevel { get; set; }

        private UserInput() : base()  { }

        public override async Task<User> MapToEntity(Guid requesterId)
        {
            var name = new EntityName(FirstName, LastName);
            var email = new Email(EmailAddress);
            var birthDate = new BirthDate(BirthDate);

            var user = new User(Id, name, email, birthDate, EducationLevel);
            var isCreating = !CreatorId.HasValue || CreatorId.Value.IsEmpty() || !CreationTime.HasValue || CreationTime == DateTime.MinValue;
            if (isCreating)
            {
                user.AddCreationInfo(requesterId);
            }
            else
            {
                user.AddCreationInfo(CreatorId.Value, CreationTime.Value);
                user.AddModificationInfo(requesterId);
            }

            return user;
        }
    }
}
