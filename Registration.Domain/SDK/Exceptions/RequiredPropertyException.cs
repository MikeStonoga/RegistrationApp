using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    internal class RequiredPropertyException : BaseException
    {
        public RequiredPropertyException()
        {
        }

        public RequiredPropertyException(string message) : base(message)
        {
        }

        public RequiredPropertyException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected RequiredPropertyException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}