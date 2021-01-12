using System;
using System.Threading.Tasks;
using Registration.InterfaceAdapters.Gateways.Persistence;
using Registration.UseCases.BaseAbstractions;

namespace Registration.UseCases.Extensions
{
    public static class UseCasesResponses
    {
        public static async Task<UseCaseResult<TUseCaseResult>> GetUseCaseExecutionResponse<TIUseCase, TUseCaseResult>(TIUseCase useCase)
            where TIUseCase : IBaseUseCase<TUseCaseResult> where TUseCaseResult : class, new()
        {
            var useCaseResponse = await useCase.Execute();
            if (!useCaseResponse.Success) return Failure<TUseCaseResult>(useCaseResponse.Message);
            var useCaseResult = useCaseResponse.Result;
            if (useCaseResult.GetType() == typeof(TUseCaseResult)) return Success(useCaseResponse.Result, useCaseResponse.Message);
            
            var output = Activator.CreateInstance(typeof(TUseCaseResult), useCaseResponse.Result) as TUseCaseResult;
            return Success(output, useCaseResponse.Message);
        }
        
        public static async Task<UseCaseResult<TUseCaseResult>> GetUseCaseExecutionResponse<TIUseCase, TUseCaseRequirement, TUseCaseResult>(TIUseCase useCase, TUseCaseRequirement input)
            where TIUseCase : IBaseUseCase<TUseCaseRequirement, TUseCaseResult> where TUseCaseResult : class, new()
        {
            var useCaseResponse = await useCase.Execute(input);
            if (!useCaseResponse.Success) return Failure<TUseCaseResult>(useCaseResponse.Message);
            var useCaseResult = useCaseResponse.Result;
            if (useCaseResult.GetType() == typeof(TUseCaseResult)) return Success(useCaseResponse.Result, useCaseResponse.Message);
            
            var output = Activator.CreateInstance(typeof(TUseCaseResult), useCaseResponse.Result) as TUseCaseResult;
            return Success(output, useCaseResponse.Message);
        }


        public static UseCaseResult Success(string message = "Success!") => GetSuccessResult(message);

        public static UseCaseResult<TResult> Success<TResult>(TResult result, string message = "Success!")
        {
            return GetSuccessResult(result, message);
        }
        
        public static UseCaseResult<TResult> Success<TResult>(string message = "Success!") where TResult : new()
        {
            var result = new TResult();
            return GetSuccessResult(result, message);
        }

        public static UseCaseResult Failure(string message = "Failure!") => GetFailureResult(message);

        public static UseCaseResult<TResult> Failure<TResult>(TResult result, string message = "Failure!") where TResult : new()
        {
            return GetFailureResult(result, message);
        }
        
        public static UseCaseResult<TResult> Failure<TResult>(string message = "Failure!") where TResult : new()
        {
            var result = new TResult();
            return GetFailureResult(result, message);
        }
        
        public static UseCaseResult<TResult> GetSuccessResult<TResult>(TResult result, string message = "") 
        {
            return GetResult(true, result, message);
        }
        
        public static UseCaseResult<TResult> GetFailureResult<TResult>(TResult result, string message = "") 
        {
            return GetResult(false, result, message);
        }

        public static UseCaseResult GetSuccessResult(string message = "Success!")
        {
            return GetResult(true, message);
        }

        public static UseCaseResult GetFailureResult(string message = "Failure!")
        {
            return GetResult(false, message);
        }

        public static UseCaseResult GetResult(bool isSuccessResult, string message = "")
        {
            return new UseCaseResult(message, isSuccessResult);
        }
        public static UseCaseResult<TResult> GetResult<TResult>(bool isSuccessResult, TResult result, string message = "") 

        {
            return new UseCaseResult<TResult>(result, message, isSuccessResult);
        }
    }
}