using ECommerceDemoApi.Models;
using System.Collections.Generic;

namespace ECommerceDemoApi.Services
{
    public interface IService<T> where T : class
    {
        T Add(T entity);
        IEnumerable<T> GetAllPaged(int currentPage, int pageSize);
    }
}