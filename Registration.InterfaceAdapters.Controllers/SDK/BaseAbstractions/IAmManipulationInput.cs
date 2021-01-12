﻿﻿using System;
using System.Threading.Tasks;
using Registration.Domain.BaseAbstractions;

namespace Registration.InterfaceAdapters.Controllers
{
    public interface IAmManipulationInput<TEntity> where TEntity : Entity
    {
        Task<TEntity> MapToEntity(Guid requesterId);
    };
}