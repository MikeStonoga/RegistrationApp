using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Registration.Domain.BaseAbstractions;
using Registration.InterfaceAdapters.Gateways.Persistence;

namespace Registration.Infrastructure.Persistence.SqlServer
{
    public interface IReadOnlyRepository<TEntity> : IReadOnlyPersistenceGateway<TEntity> where TEntity : FullAuditedEntity
    {
    }
    
    public class ReadOnlyRepository<TEntity> : IReadOnlyRepository<TEntity> where TEntity : FullAuditedEntity, new()
    {
        private readonly DbContext _database;

        public ReadOnlyRepository(ICurrentDbContext database)
        {
            _database = database.Context;
        }

        public async Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            try
            {
                var entity = await _database.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(predicate);
                return entity;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return new TEntity();
            }
        }

        public async Task<int> Count()
        {
            return await _database.Set<TEntity>().CountAsync();
        }

        public IQueryable<TEntity> GetAll()
        {
            try
            {
                var all = _database.Set<TEntity>().AsNoTracking();
                return all;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return new List<TEntity>().AsQueryable();
            }
        }

        public async Task<TEntity> First(Expression<Func<TEntity, bool>> predicate)
        {
            try
            {
                var first = await _database.Set<TEntity>().AsNoTracking().FirstAsync(predicate);
                return first;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return new TEntity();
            }
        }
    }
    
    public interface IRepository<TEntity> :  IManipulationPersistenceGateway<TEntity> where TEntity : FullAuditedEntity
    {
    }

    public class Repository<TEntity> : ReadOnlyRepository<TEntity>, IRepository<TEntity> 
        where TEntity : FullAuditedEntity, new()
    {

        private readonly DbContext _database;

        public Repository(ICurrentDbContext database) : base(database)
        {
            _database = database.Context;
        }
        

        public async Task<TEntity> Create(TEntity entity)
        {
            try
            {
                var entityCreated = _database.Add(entity);
                _database.Entry(entity).State = EntityState.Added;
                await _database.SaveChangesAsync();
                return entityCreated.Entity;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            try {
                _database.Update(entity);
                await _database.SaveChangesAsync();
                return entity;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public async Task Delete(Guid id, Guid deleterId)
        {
            try
            {
                var entity = await _database.FindAsync<TEntity>(id);

                entity.Delete(deleterId);
                await Update(entity);
                await _database.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}