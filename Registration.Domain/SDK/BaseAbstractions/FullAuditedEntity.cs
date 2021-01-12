using System;
using Registration.Domain.ValueObjects;
using Registration.Domain.Extensions;
using Registration.Domain.Exceptions;
using Registration.Domain.SDK.ValueObjects;

namespace Registration.Domain.BaseAbstractions
{

    public abstract class FullAuditedEntity : Entity, IFullAuditedEntity
    {
        public Guid CreatorId { get; private set; }
        public DateTime CreationTime { get; private set; }
        public Guid? LastModifierId { get; private set; }
        public DateTime? LastModificationTime { get; private set; }
        public Guid? DeleterId { get; private set; }
        public DateTime? DeletionTime { get; private set; }
        public bool IsDeleted { get; private set; }
        public bool WasUpdated => LastModificationTime != null;
        public bool WasDeleted => DeletionTime != null;
        
        protected FullAuditedEntity() {}
        public FullAuditedEntity(Guid id, EntityName name) : base(id, name)
        {
        }

        public void AddCreationInfo(Guid creatorId)
        {
            if (creatorId.IsEmpty()) throw new RequiredPropertyException("Creator Id is Required!");
            CreatorId = creatorId;
            CreationTime = DateTime.Now;
        }
        
        public void AddCreationInfo(Guid creatorId, DateTime creationTime)
        {
            if (creatorId.IsEmpty()) throw new RequiredPropertyException("Creator Id is Required!");
            CreatorId = creatorId;
            CreationTime = creationTime;
        }

        public bool WasTheCreator(Guid id) => CreatorId == id;
        public bool WasCreatedOnPeriod(DateRange period) => period.IsOnRange(CreationTime);
        
        public void AddModificationInfo(Guid modifierId)
        {
            SetLastModifierId(modifierId);
            LastModificationTime = DateTime.Now;
        }

        private void SetLastModifierId(Guid modifierId)
        {
            if (modifierId.IsEmpty()) throw new EntityException("Modifier Id is Required!");
            LastModifierId = modifierId;
        }

        public bool WasTheLastModifier(Guid id) => LastModifierId == id;
        public bool WasLastModificationOnPeriod(DateRange period) => period.IsOnRange(LastModificationTime);

        public void Delete(Guid deleterId)
        {
            SetDeleterId(deleterId);
            DeletionTime = DateTime.Now;
            IsDeleted = true;
        }

        private void SetDeleterId(Guid deleterId)
        {
            if (deleterId.IsEmpty()) throw new EntityException("Deleter Id is Required!");
            DeleterId = deleterId;
        }

        public bool WasTheDeleter(Guid id) => DeleterId == id;
        public bool WasDeletedOnPeriod(DateRange period) => period.IsOnRange(DeletionTime);
    }
}