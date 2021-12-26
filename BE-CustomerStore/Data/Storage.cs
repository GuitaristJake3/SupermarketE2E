﻿namespace BE_CustomerStore.Data
{
    public interface IEntity
    {
        Guid Id { get; set; }
    }

    public interface IStore<T>
        where T : IEntity
    {
        Task<IEnumerable<T>> Get();
        Task<Guid> Add(T newItem);
    }

    public class MemoryStore<T> : IStore<T>
        where T : IEntity
    {
        private readonly Dictionary<Guid, T> _data;

        public MemoryStore()
        {
            _data = new Dictionary<Guid, T>();
        }

        public Task<Guid> Add(T newItem)
        {
            newItem.Id = Guid.NewGuid();
            _data.Add(newItem.Id, newItem);
            return Task.FromResult(newItem.Id);
        }

        public Task<IEnumerable<T>> Get()
        {
            return Task.FromResult(_data.Values.AsEnumerable());
        }
    }
}
