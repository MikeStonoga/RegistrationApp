using System;
using Registration.Domain.ValueObjects;

namespace Registration.Domain.BaseAbstractions
{
    public interface IAuditDeletion
    {
        Guid? DeleterId { get; }
        DateTime? DeletionTime { get; }
        bool IsDeleted { get; }
        bool WasDeleted { get; }
        void Delete(Guid deleterId);
        bool WasTheDeleter(Guid id);
        bool WasDeletedOnPeriod(DateRange period);
    }
}