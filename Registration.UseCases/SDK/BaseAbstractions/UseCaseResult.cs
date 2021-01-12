using Registration.Domain.SDK.BaseAbstractions;

namespace Registration.UseCases.BaseAbstractions
{

    public class UseCaseResult : ResultInfoDTO, IUseCaseResult
    {
        public UseCaseResult(string message = "Success", bool success = true) : base(message, success)
        {
        } 
    }

    public class UseCaseResult<TResult> : ResultInfoDTO<TResult>, IUseCaseResult<TResult>
    {
        public UseCaseResult(TResult result, string message = "Success", bool success = true) : base(message, success, result)
        {
        }
    }
}
