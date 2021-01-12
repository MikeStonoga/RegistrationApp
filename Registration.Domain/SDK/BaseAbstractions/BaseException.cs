using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    public abstract class BaseException : Exception
    {
        public BaseException()
        {
        }

        public BaseException(string message) : base(message)
        {
            Log(message);
        }

        public BaseException(string message, Exception innerException) : base(message, innerException)
        {
            Log(message, innerException);
        }

        protected BaseException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }

        protected void Log(string message)
        {
            Console.WriteLine($"\n\nERROR: {message}\n");
        }

        protected void Log(string message, Exception ex)
        {
            Log(message);
            Console.WriteLine($"INNER EXCEPTION: {ex.Message}\n");
            Console.WriteLine($"STACKTRACE: {ex.StackTrace}");
        }
    }
}
