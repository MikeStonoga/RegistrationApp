using Registration.Domain.Exceptions;
using Registration.Domain.Extensions;
using Registration.Domain.SDK.ValueObjects;
using System;

namespace Registration.Domain.BaseAbstractions
{
    public interface IEntity
    {
        Guid Id { get; }
        EntityName Name { get; }
        void SetName(EntityName name);
    }
    
    public abstract class Entity : IEntity
    {
        #region Properties
        public Guid Id { get; private set; }
        public EntityName Name { get; private set; }
        #endregion

        #region Constructors
        protected Entity() {}
        public Entity(Guid id, EntityName name)
        {
            Id = id;
            SetName(name);
        }
        #endregion

        #region Methods
        public void SetName(EntityName name) => Name = name;        
        #endregion
        
    }
}