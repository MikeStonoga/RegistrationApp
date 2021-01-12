using Registration.Domain.SDK.BaseAbstractions;

namespace Registration.UseCases.BaseAbstractions
{
    public interface IUseCaseResult : IResultInfoDTO
    {
    }

    public interface IUseCaseResult<TResult> : IUseCaseResult, IResultInfoDTO<TResult>
    {
    }
}
