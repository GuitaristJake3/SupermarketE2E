namespace BE_CustomerStore.Data
{
    public interface IStore<T>
        where T : class, IEntity
    {
        Task<IEnumerable<T>> Get();
        Task<Guid> Add(T newItem);
    }
}
