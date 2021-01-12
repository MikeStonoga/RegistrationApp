using Registration.Domain.SDK.BaseAbstractions;
using Registration.UseCases.BaseAbstractions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.InterfaceAdapters.Controllers.SDK.BaseAbstractions
{
    public interface IApiResponse : IResultInfoDTO
    {
    }

    public class ApiResponse : ResultInfoDTO, IApiResponse
    {
        public ApiResponse(string message, bool success) : base(message, success)
        {
        }
    }

    public interface IApiResponse<TResponse> : IResultInfoDTO<TResponse>
    {
    }

    public class ApiResponse<TResponse> : ResultInfoDTO<TResponse>, IApiResponse<TResponse>
    {
        public ApiResponse(string message, bool success, TResponse result) : base(message, success, result)
        {
        }

    }
}
