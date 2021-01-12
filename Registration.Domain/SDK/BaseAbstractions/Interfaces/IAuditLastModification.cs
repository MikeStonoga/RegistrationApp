using System;
using Registration.Domain.ValueObjects;

namespace Registration.Domain.BaseAbstractions
{
    public interface IAuditLastModification
    {
        Guid? LastModifierId { get; }
        DateTime? LastModificationTime { get; }
        bool WasUpdated { get; }
        void AddModificationInfo(Guid modifierId);
        bool WasTheLastModifier(Guid id);
        bool WasLastModificationOnPeriod(DateRange period);

    }
}