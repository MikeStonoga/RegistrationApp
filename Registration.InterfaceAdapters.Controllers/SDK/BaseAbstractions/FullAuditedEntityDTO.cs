using System;
using Registration.Domain.BaseAbstractions;

namespace Registration.InterfaceAdapters.Controllers.DTOs
{
    public class FullAuditedEntityDTO<TEntity> where TEntity : FullAuditedEntity
    {
        public abstract class Input : EntityDTO<TEntity>.Input, IFullAuditedEntityDTO
        {
            public Guid? CreatorId { get; set; }
            public DateTime? CreationTime { get; set; }
            public Guid? LastModifierId { get; set; }
            public DateTime? LastModificationTime { get; set; }

            public Input() { }
        }

        public abstract class Output : EntityDTO<TEntity>.Output, IFullAuditedEntityDTO
        {
            public Output() {}
            public Output(TEntity entity) : base(entity)
            {
                CreatorId = entity.CreatorId;
                CreationTime = entity.CreationTime;
                LastModifierId = entity.LastModifierId;
                LastModificationTime = entity.LastModificationTime;
            }

            public Guid? CreatorId { get; set; }
            public DateTime? CreationTime { get; set; }
            public Guid? LastModifierId { get; set; }
            public DateTime? LastModificationTime { get; set; }
        }
    }

    public interface IFullAuditedEntityDTO : IEntityDTO, IAuditCreationDTO, IAuditModificationDTO
    {
    }

    public interface IAuditCreationDTO
    {
        Guid? CreatorId { get; set; }
        DateTime? CreationTime { get; set; }
    }

    public interface IAuditModificationDTO
    {
        Guid? LastModifierId { get; set; }
        DateTime? LastModificationTime { get; set; }
    }
}