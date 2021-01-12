using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Registration.Domain.BaseAbstractions;
using Registration.InterfaceAdapters.Controllers;
using Registration.InterfaceAdapters.Controllers.SDK.BaseAbstractions;
using Registration.UseCases.BaseAbstractions.Interfaces;

namespace Registration.Infrastructure.ApplicationDelivery.WebHost
{
    public interface IBaseReadOnlyWebController<TEntity, TEntityOutput> : IBaseReadOnlyController<TEntity, TEntityOutput>
        where TEntity : FullAuditedEntity
        where TEntityOutput : class
    {
    }
    
    [ApiController]
    [Route("[controller]/[action]")]
    public abstract class BaseReadOnlyWebController<TEntity, TEntityOutput, TIEntityReadOnlyController> : IBaseReadOnlyWebController<TEntity, TEntityOutput>
        where TEntity : FullAuditedEntity
        where TEntityOutput : class
        where TIEntityReadOnlyController : IBaseReadOnlyController<TEntity, TEntityOutput>
    {

        private readonly TIEntityReadOnlyController _readOnlyController; 
        
        public BaseReadOnlyWebController(TIEntityReadOnlyController readOnlyController)
        {
            _readOnlyController = readOnlyController;
        }
        
        [HttpGet("{id}")]
        public async Task<ApiResponse<TEntityOutput>> GetById([FromQuery] Guid id)
        {
            return await _readOnlyController.GetById(id);
        }

        [HttpPost]
        public async Task<ApiResponse<List<TEntityOutput>>> GetByIds([FromBody] List<Guid> ids)
        {
            return await _readOnlyController.GetByIds(ids);
        }
        
        
        [HttpGet]
        public async Task<ApiResponse<GetAllResponse<TEntityOutput>>> GetAll()
        {
            return await _readOnlyController.GetAll();
        }

    }

    public interface IBaseManipulationWebController<TEntity, in TEntityInput, TEntityOutput> : IBaseReadOnlyWebController<TEntity, TEntityOutput>
        where TEntity : FullAuditedEntity
        where TEntityOutput : class
        where TEntityInput : IAmManipulationInput<TEntity>
    {
    }
    [ApiController]
    [Route("[controller]/[action]")]
    public abstract class BaseManipulationWebController<TEntity, TEntityInput, TEntityOutput, TIEntityManipulationController> : BaseReadOnlyWebController<TEntity, TEntityOutput, TIEntityManipulationController>, IBaseManipulationWebController<TEntity, TEntityInput, TEntityOutput>
        where TEntity : FullAuditedEntity
        where TEntityOutput : class
        where TEntityInput : IAmManipulationInput<TEntity>
        where TIEntityManipulationController : IBaseManipulationController<TEntity, TEntityInput, TEntityOutput>
    {
        private readonly TIEntityManipulationController _manipulationController;

        protected BaseManipulationWebController(TIEntityManipulationController manipulationController) : base(manipulationController)
        {
            _manipulationController = manipulationController;
        }

        [HttpPost]
        public async Task<ApiResponse<TEntityOutput>> Create([FromBody] TEntityInput input)
        {
            return await _manipulationController.Create(input, GetRequesterId());
        }

        [HttpPut]
        public async Task<ApiResponse<TEntityOutput>> Update([FromBody] TEntityInput entityToUpdate)
        {
            return await _manipulationController.Update(entityToUpdate, GetRequesterId());
        }

        [HttpDelete("{id}")]
        public async Task<ApiResponse> Delete(Guid id)
        {
            return await _manipulationController.Delete(id, GetRequesterId());
        }
        
        protected virtual Guid GetRequesterId() =>  Guid.NewGuid();
    }
}