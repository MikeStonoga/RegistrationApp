using Registration.Domain.BaseAbstractions;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Registration.InterfaceAdapters.Gateways.Persistence
{
    public interface IReadOnlyPersistenceGateway<TEntity>
        where TEntity : FullAuditedEntity
    {
        IQueryable<TEntity> GetAll();
        Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
        Task<int> Count();
    }

    public interface IManipulationPersistenceGateway<TEntity> : IReadOnlyPersistenceGateway<TEntity>
        where TEntity : FullAuditedEntity
    {
        Task<TEntity> Create(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task Delete(Guid id, Guid deleterId);

    }
}
