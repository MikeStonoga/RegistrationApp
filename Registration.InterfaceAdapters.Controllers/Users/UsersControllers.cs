using Registration.Domain.Exceptions;
using Registration.Domain.SDK.Extensions;
using Registration.Domain.Users;
using Registration.InterfaceAdapters.Controllers.Extensions;
using Registration.InterfaceAdapters.Controllers.SDK.BaseAbstractions;
using Registration.InterfaceAdapters.Controllers.Users.DTOs;
using Registration.UseCases.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.InterfaceAdapters.Controllers.Users
{
    public interface IUserReadOnlyController : IBaseReadOnlyController<User, UserOutput>
    {

    }

    public class UserReadOnlyController : IUserReadOnlyController
    {
        private IUserReadOnlyUseCasesInteractor _userReadOnlyUseCases;
        public UserReadOnlyController(IUserReadOnlyUseCasesInteractor userReadOnlyUseCases)
        {
            _userReadOnlyUseCases = userReadOnlyUseCases;
        }

        public async Task<ApiResponse<GetAllResponse<UserOutput>>> GetAll()
            => await TryTo(() => GetAllUsers(), failureResponseFunc: (Exception ex) => AnswerFailureToGetAll(ex));

        private async Task<GetAllResponse<UserOutput>> GetAllUsers()
        {
            var getAllUsersResponse = await _userReadOnlyUseCases.GetAll();
            if (!getAllUsersResponse.Success) throw new ExecutionException("Failure in Get All Users!");

            var userOutputs = getAllUsersResponse.Result.Items.Select(user => new UserOutput(user)).ToList();
            var getAllResponse = new GetAllResponse<UserOutput>(userOutputs, getAllUsersResponse.Result.TotalCount);
            
            return getAllResponse;
        }

        protected async Task<ApiResponse<TResult>> TryTo<TResult>(Func<Task<TResult>> tryToFunc, Func<Exception, ApiResponse<TResult>> failureResponseFunc)
            where TResult : new()
        {
            try
            {
                var response = await tryToFunc();
                return ApiResponses.Success(response);
            }
            catch (Exception ex)
            {
                ex.WriteOnConsole();
                return failureResponseFunc(ex);
            }
        }

        private static ApiResponse<GetAllResponse<UserOutput>> AnswerFailureToGetAll(Exception ex)
            => new ApiResponse<GetAllResponse<UserOutput>>(
                    message: ex.ToString(),
                    success: false,
                    result: new GetAllResponse<UserOutput>()
                );

        public async Task<ApiResponse<UserOutput>> GetById(Guid id)
            => await TryTo(() => GetUserById(id), failureResponseFunc: (Exception ex) => AnswerFailureToGetUserById(ex));

        private async Task<UserOutput> GetUserById(Guid id)
        {
            var getUserByIdResponse = await _userReadOnlyUseCases.GetById(id);
            if (!getUserByIdResponse.Success) throw new ExecutionException($"Failure to get User by id! {getUserByIdResponse.Message}");

            var userOutput = new UserOutput(getUserByIdResponse.Result);
            return userOutput;
        }

        private static ApiResponse<UserOutput> AnswerFailureToGetUserById(Exception ex)
             => AnswerEmptyUserOutput(ex);

        protected static ApiResponse<UserOutput> AnswerEmptyUserOutput(Exception ex)
            => new ApiResponse<UserOutput>(
                        message: ex.ToString(),
                        success: false,
                        result: new UserOutput()
                    );




        public async Task<ApiResponse<List<UserOutput>>> GetByIds(List<Guid> ids)
            => await TryTo(() => GetUserByIds(ids), failureResponseFunc: (Exception ex) => AnswerFailureToGetUsersByIds(ex));
            

        private async Task<List<UserOutput>> GetUserByIds(List<Guid> ids)
        {
            var getUsersByIdsResponse = await _userReadOnlyUseCases.GetByIds(ids);
            if (!getUsersByIdsResponse.Success) throw new ExecutionException($"Failure in get users! {getUsersByIdsResponse.Message}");

            var userOutputs = getUsersByIdsResponse.Result.Select(user => new UserOutput(user)).ToList();
            return userOutputs;
        }

        private ApiResponse<List<UserOutput>> AnswerFailureToGetUsersByIds(Exception ex)
            => new ApiResponse<List<UserOutput>>(
                    message: ex.ToString(),
                    success: false,
                    result: new List<UserOutput>()
                );
    }




    public interface IUserController : IUserReadOnlyController, IBaseManipulationController<User, UserInput, UserOutput>
    {

    }


    public class UserController : UserReadOnlyController, IUserController
    {
        private readonly IUserUseCasesInteractor _userUseCases;
        public UserController(IUserUseCasesInteractor userUseCases) : base(userUseCases)
        {
            _userUseCases = userUseCases;
        }

        public async Task<ApiResponse<UserOutput>> Create(UserInput input, Guid creatorId)
            => await TryTo(() => CreateUser(input, creatorId), failureResponseFunc: (Exception ex) => AnswerFailureToCreate(ex));

        private async Task<UserOutput> CreateUser(UserInput input, Guid creatorId)
        {
            var userToCreate = await input.MapToEntity(creatorId);

            var useCaseResult = await _userUseCases.Create(userToCreate, creatorId);
            if (!useCaseResult.Success) throw new ExecutionException($"Failure to create user! {useCaseResult.Message}");

            var entityOutput = new UserOutput(useCaseResult.Result);
            return entityOutput;
        }

        private static ApiResponse<UserOutput> AnswerFailureToCreate(Exception ex) => AnswerEmptyUserOutput(ex);




        public async Task<ApiResponse<UserOutput>> Update(UserInput entityToUpdate, Guid modifierId)
            => await TryTo(() => UpdateUser(entityToUpdate, modifierId), failureResponseFunc: (Exception ex) => AnswerFailureToUpdate(ex));

        private async Task<UserOutput> UpdateUser(UserInput entityToUpdate, Guid modifierId)
        {
            var getEntityToUpdateResponse = await _userUseCases.GetById(entityToUpdate.Id);
            if (!getEntityToUpdateResponse.Success) throw new ExecutionException($"Failure to retrieve user to update! {getEntityToUpdateResponse.Message}");

            var userToUpdate = await entityToUpdate.MapToEntity(modifierId);
            var useCaseResult = await _userUseCases.Update(userToUpdate, modifierId);

            if (!useCaseResult.Success) throw new ExecutionException($"Failure to update user! {useCaseResult.Message}");

            var entityOutput = new UserOutput(useCaseResult.Result);
            return entityOutput;
        }

        private ApiResponse<UserOutput> AnswerFailureToUpdate(Exception ex) => AnswerEmptyUserOutput(ex);


        public async Task<ApiResponse> Delete(Guid id, Guid deleterId)
        {
            var useCaseResult = await _userUseCases.Delete(id, deleterId);
            return !useCaseResult.Success ? ApiResponses.Failure() : ApiResponses.Success();
        }
    }
}
