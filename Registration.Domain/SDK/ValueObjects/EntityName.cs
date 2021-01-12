using Registration.Domain.Exceptions;
using Registration.Domain.Extensions;
using Registration.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Domain.SDK.ValueObjects
{
    public class EntityName : ValueObject
    {
        #region Properties
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        #endregion

        #region Constructors
        protected EntityName() { }
        public EntityName(string name, string lastName)
        {
            SetFirstName(name);
            SetLastName(lastName);
        }
        #endregion

        #region Methods
        private void SetFirstName(string firstName)
        {
            if (!firstName.HasValue()) throw new RequiredPropertyException("Entity fisrt name is required!");
            FirstName = firstName;
        }
        private void SetLastName(string lastName)
        {
            LastName = lastName;
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return FirstName;
            yield return LastName;
        }
        #endregion

    }
}
