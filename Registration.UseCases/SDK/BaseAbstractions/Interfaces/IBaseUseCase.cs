using System.Threading.Tasks;

namespace Registration.UseCases.BaseAbstractions
{
    public interface IBaseUseCase
    {
        Task<UseCaseResult> Execute();
    }

    public interface IBaseUseCase<TResult>
    {
        Task<UseCaseResult<TResult>> Execute();
    }

    public interface IBaseUseCase<in TRequirement, TResult>
    {
        Task<UseCaseResult<TResult>> Execute(TRequirement requirement);
    }
}
