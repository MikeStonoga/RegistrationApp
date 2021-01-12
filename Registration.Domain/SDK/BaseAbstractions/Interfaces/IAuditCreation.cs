using System;
using Registration.Domain.ValueObjects;

namespace Registration.Domain.BaseAbstractions
{
    public interface IAuditCreation
    {
        Guid CreatorId { get; }
        DateTime CreationTime { get; }
        bool WasTheCreator(Guid id);
        bool WasCreatedOnPeriod(DateRange period);
    }
}