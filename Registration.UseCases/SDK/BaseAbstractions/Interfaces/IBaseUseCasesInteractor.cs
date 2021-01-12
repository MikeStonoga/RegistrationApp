using Registration.Domain.BaseAbstractions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Registration.UseCases.BaseAbstractions.Interfaces
{
    public interface IBaseUseCasesReadOnlyInteractor<TEntity>
        where TEntity : FullAuditedEntity
    {
        Task<UseCaseResult<TEntity>> GetById(Guid id);
        Task<UseCaseResult<List<TEntity>>> GetByIds(List<Guid> ids);
        Task<UseCaseResult<GetAllResponse<TEntity>>> GetAll();
    }
    public interface IBaseUseCasesManipulationInteractor<TEntity> : IBaseUseCasesReadOnlyInteractor<TEntity>
        where TEntity : FullAuditedEntity
    {
        Task<UseCaseResult<TEntity>> Create(TEntity entityToCreate, Guid creatorId);
        Task<UseCaseResult<TEntity>> Update(TEntity entityToUpdate, Guid modifierId);
        Task<UseCaseResult> Delete(Guid id, Guid deleterId);
    }
}
