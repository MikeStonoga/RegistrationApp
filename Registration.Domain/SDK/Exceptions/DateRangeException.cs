using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    internal class DateRangeException : BaseException
    {
        public DateRangeException()
        {
        }

        public DateRangeException(string message) : base(message)
        {
        }

        public DateRangeException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected DateRangeException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}