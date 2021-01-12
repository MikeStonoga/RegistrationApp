using Registration.Domain.BaseAbstractions;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Registration.InterfaceAdapters.Controllers.SDK.BaseAbstractions
{
    public interface IBaseReadOnlyController<TEntity, TEntityOutput>
        where TEntity : FullAuditedEntity
    {
        Task<ApiResponse<TEntityOutput>> GetById(Guid id);
        Task<ApiResponse<List<TEntityOutput>>> GetByIds(List<Guid> ids);
        Task<ApiResponse<GetAllResponse<TEntityOutput>>> GetAll();
    }

    public class GetAllResponse<TEntityOutput>
    {
        public List<TEntityOutput> Items { get; set; } = new List<TEntityOutput>();
        public int TotalCount { get; set; } = 0;

        public GetAllResponse() { }

        public GetAllResponse(List<TEntityOutput> entityOutputs, int totalCount) 
        {
            Items = entityOutputs;
            TotalCount = totalCount;
        }
    }

    public interface IBaseManipulationController<TEntity, in TEntityInput, TEntityOutput> : IBaseReadOnlyController<TEntity, TEntityOutput>
        where TEntity : FullAuditedEntity
        where TEntityOutput : class
    {
        Task<ApiResponse<TEntityOutput>> Create(TEntityInput input, Guid creatorId);
        Task<ApiResponse<TEntityOutput>> Update(TEntityInput entityToUpdate, Guid modifierId);
        Task<ApiResponse> Delete(Guid id, Guid deleterId);
    }
}
