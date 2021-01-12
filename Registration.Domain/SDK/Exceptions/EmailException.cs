﻿using System;
using System.Runtime.Serialization;

namespace Registration.Domain.Exceptions
{
    [Serializable]
    internal class EmailException : BaseException
    {
        public EmailException()
        {
        }

        public EmailException(string message) : base(message)
        {
        }

        public EmailException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected EmailException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}