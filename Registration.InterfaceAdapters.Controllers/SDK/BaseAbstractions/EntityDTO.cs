using System;
using System.Threading.Tasks;
using Registration.Domain.BaseAbstractions;

namespace Registration.InterfaceAdapters.Controllers.DTOs
{
    public class EntityDTO<TEntity> where TEntity : Entity
    {
        public abstract class Input : IEntityDTO, IAmManipulationInput<TEntity>
        {
            public Guid Id { get; set; } = Guid.NewGuid();
            public string FirstName { get; set; }
            public string LastName { get; set; }

            public abstract Task<TEntity> MapToEntity(Guid requesterId);
        }

        public abstract class Output : IEntityDTO
        {
            public Guid Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }

            public Output() {}
            public Output(TEntity entity)
            {
                Id = entity.Id;
                FirstName = entity.Name.FirstName;
                LastName = entity.Name.LastName;
            }
        }
    }

    public interface IEntityDTO
    {
        Guid Id { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
    }
}