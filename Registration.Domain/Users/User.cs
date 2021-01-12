using Registration.Domain.BaseAbstractions;
using Registration.Domain.SDK.ValueObjects;
using Registration.Domain.ValueObjects;
using System;

namespace Registration.Domain.Users
{
    public sealed class User : FullAuditedEntity
    {
        #region Properties
        public Email Email { get; private set; }
        public BirthDate BirthDate { get; private set; }
        public EducationLevels EducationLevel { get; private set; }
        #endregion

        #region Constructors
        public User() { }
        public User(Guid id, EntityName name, Email email, BirthDate birthDate, EducationLevels educationLevel) : base(id, name)
        {
            Email = email;
            BirthDate = birthDate;
            EducationLevel = educationLevel;
        }
        #endregion
    }
}
