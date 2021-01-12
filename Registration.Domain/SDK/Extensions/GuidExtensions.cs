using System;

namespace Registration.Domain.Extensions
{
    public static class GuidExtensions
    {
        public static bool HasValue(this Guid id) => id != Guid.Empty;
        public static bool IsEmpty(this Guid id) => !HasValue(id) || id == null;
    }
}
