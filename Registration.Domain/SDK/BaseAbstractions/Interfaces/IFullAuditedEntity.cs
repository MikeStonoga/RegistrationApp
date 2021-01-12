namespace Registration.Domain.BaseAbstractions
{
    public interface IFullAuditedEntity : IEntity, IAuditCreation, IAuditLastModification, IAuditDeletion
    {
    }
}