using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    internal class EntityException : BaseException
    {
        public EntityException()
        {
        }

        public EntityException(string message) : base(message)
        {
        }

        public EntityException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected EntityException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}