using System.Threading.Tasks;

namespace Registration.UseCases.BaseAbstractions
{

    public abstract class BaseUseCase : IBaseUseCase
    {
        public abstract Task<UseCaseResult> Execute();
    }

    public abstract class BaseUseCase<TResult> : IBaseUseCase<TResult>
    {
        public abstract Task<UseCaseResult<TResult>> Execute();
    }
    
    public abstract class BaseUseCase<TRequirement, TResult> : IBaseUseCase<TRequirement, TResult>
    {
        public abstract Task<UseCaseResult<TResult>> Execute(TRequirement requirement);
    }
}
