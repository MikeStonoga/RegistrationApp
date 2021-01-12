using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Registration.InterfaceAdapters.Controllers.SDK.BaseAbstractions;

namespace Registration.InterfaceAdapters.Controllers.Extensions
{
    public static class ApiResponses
    {
        
        public static ApiResponse Success(string message = "Success!")
        {
            return GetSuccessResult(message);
        }

        public static ApiResponse<TResult> Success<TResult>(TResult result, string message = "Success!")
        {
            return GetSuccessResult(result, message);
        }

        public static ApiResponse Failure(string message = "Failure!")
        {
            return GetFailureResult(message);
        }

        public static ApiResponse<TResult> Failure<TResult>(TResult result, string message = "Failure!")
        {
            return GetFailureResult(result, message);
        }
        
        public static ApiResponse<TResult> Failure<TResult>(string message = "Failure!") where TResult : new()
        {
            var result = new TResult();
            return GetFailureResult(result, message);
        }

        public static ApiResponse GetSuccessResult(string message = "Success!")
        {
            return GetResponse(true, message);
        }
        public static ApiResponse<TResult> GetSuccessResult<TResult>(TResult result, string message = "Success!")
        {
            return GetResponse(true, result, message);
        }
        public static ApiResponse GetFailureResult(string message = "")
        {
            return GetResponse(false, message);
        }

        public static ApiResponse<TResult> GetFailureResult<TResult>(TResult result, string message = "")
        {
            return GetResponse(false, result, message);
        }

        public static ApiResponse GetResponse(bool isSuccessResult, string message = "")
        {
            return new ApiResponse(message, isSuccessResult);
        }

        public static ApiResponse<TResult> GetResponse<TResult>(bool isSuccessResult, TResult response, string message = "") 
        {
            return new ApiResponse<TResult>(message, isSuccessResult, response);
        }
    }
}