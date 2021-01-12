using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Domain.SDK.BaseAbstractions
{
    public interface IResultInfoDTO
    {
        bool Success { get; }
        string Message { get; }
    }

    public abstract class ResultInfoDTO : IResultInfoDTO
    {
        public bool Success { get; private set; }
        public string Message { get; private set; }

        public ResultInfoDTO(string message, bool success)
        {
            Message = message;
            Success = success;
        }
    }

    public interface IResultInfoDTO<TResult> : IResultInfoDTO
    {
        TResult Result { get; }
    }

    public abstract class ResultInfoDTO<TResult> : ResultInfoDTO, IResultInfoDTO<TResult>
    {
        public TResult Result { get; private set; }
        public ResultInfoDTO(string message, bool success, TResult result) : base(message, success)
        {
            Result = result;
        }
    }
}
