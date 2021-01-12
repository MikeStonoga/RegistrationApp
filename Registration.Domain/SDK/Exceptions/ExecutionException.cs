using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    public class ExecutionException : BaseException
    {
        public ExecutionException() : base()
        {
        }

        public ExecutionException(string message) : base(message)
        {
        }

        public ExecutionException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected ExecutionException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}