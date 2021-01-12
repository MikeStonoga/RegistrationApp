using Microsoft.EntityFrameworkCore;
using Registration.Domain.BaseAbstractions;
using Registration.Domain.Exceptions;
using Registration.Domain.SDK.Extensions;
using Registration.Domain.Users;
using Registration.InterfaceAdapters.Gateways.Persistence;
using Registration.UseCases.BaseAbstractions;
using Registration.UseCases.BaseAbstractions.Interfaces;
using Registration.UseCases.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Registration.UseCases.Users
{
    public interface IUserReadOnlyUseCasesInteractor : IBaseUseCasesReadOnlyInteractor<User>
    {
    }

    public class UserReadOnlyUseCasesInteractor : IUserReadOnlyUseCasesInteractor
    {
        private readonly IReadOnlyPersistenceGateway<User> _users;
        public UserReadOnlyUseCasesInteractor(IReadOnlyPersistenceGateway<User> users)
        {
            _users = users;
        }

        public async Task<UseCaseResult<GetAllResponse<User>>> GetAll()
            => await TryTo(() => GetAllUsers());

        protected async Task<UseCaseResult<TResult>> TryTo<TResult>(Func<Task<TResult>> tryToFunc)
            where TResult : new()
        {
            try
            {
                var response = await tryToFunc();
                return UseCasesResponses.Success(response);
            }
            catch (Exception ex)
            {
                ex.WriteOnConsole();
                return UseCasesResponses.Failure<TResult>(ex.Message);
            }
        }

        private async Task<GetAllResponse<User>> GetAllUsers()
        {
            var users = await _users.GetAll()
                    .Where(e => !e.IsDeleted)
                    .ToListAsync();
            var response = new GetAllResponse<User>(users);
            return response;
        }

        

        public async Task<UseCaseResult<User>> GetById(Guid id)
            => await TryTo(() => GetUserById(id));

        private async Task<User> GetUserById(Guid id)
        {
            var user = await _users.Get(u => u.Id == id && !u.IsDeleted);
            return user;
        }

        public async Task<UseCaseResult<List<User>>> GetByIds(List<Guid> ids)
            => await TryTo(() => GetUsersByIds(ids));

        private async Task<List<User>> GetUsersByIds(List<Guid> ids)
        {
            var users = await _users.GetAll()
                    .Where(e => !e.IsDeleted)
                    .Where(IsOnIdsList<User>(ids))
                    .ToListAsync();
            return users;
        }

        private Expression<Func<TEntity, bool>> IsOnIdsList<TEntity>(List<Guid> ids)
            where TEntity : FullAuditedEntity
            => (TEntity entity) => ids.Contains(entity.Id);
    }

    public interface IUserUseCasesInteractor : IUserReadOnlyUseCasesInteractor, IBaseUseCasesManipulationInteractor<User>
    {
    }

    public class UserUseCasesInteractor : UserReadOnlyUseCasesInteractor, IUserUseCasesInteractor
    {
        private readonly IManipulationPersistenceGateway<User> _users;
        public UserUseCasesInteractor(IManipulationPersistenceGateway<User> users) : base(users)
        {
            _users = users;
        }

        public async Task<UseCaseResult<User>> Create(User entityToCreate, Guid creatorId)
            => await TryTo<User>(() => CreateUser(entityToCreate, creatorId));

        private async Task<User> CreateUser(User userToCreate, Guid creatorId)
        {
            userToCreate.AddCreationInfo(creatorId);
            var userCreated = await _users.Create(userToCreate);
            return userCreated;
        }

        public async Task<UseCaseResult<User>> Update(User entityToUpdate, Guid modifierId)
            => await TryTo<User>(() => UpdateUser(entityToUpdate, modifierId));
        

        private async Task<User> UpdateUser(User userToUpdate, Guid modifierId)
        {
            var user = await _users.Get(e => e.Id == userToUpdate.Id);
            if (user.IsDeleted) throw new ValidationException("Registry already deleted");

            userToUpdate.AddModificationInfo(modifierId);
            var entityUpdated = await _users.Update(userToUpdate);
            return entityUpdated;
        }

        public async Task<UseCaseResult> Delete(Guid id, Guid deleterId)
            => await TryTo(() => DeleteUser(id, deleterId));

        private async Task DeleteUser(Guid id, Guid deleterId)
        {
            var isDeleted = (await _users.Get(e => e.Id == id)).IsDeleted;
            if (isDeleted) throw new ValidationException("registry already deleted");

            await _users.Delete(id, deleterId);
        }

        protected async Task<UseCaseResult> TryTo(Func<Task> tryToFunc)
        {
            try
            {
                await tryToFunc();
                return UseCasesResponses.Success();
            }
            catch (Exception ex)
            {
                ex.WriteOnConsole();
                return UseCasesResponses.Failure(ex.Message);
            }
        }
    }
}
