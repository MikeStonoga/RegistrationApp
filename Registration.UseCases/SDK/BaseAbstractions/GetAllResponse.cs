using System.Collections.Generic;

namespace Registration.UseCases.BaseAbstractions
{
    public class GetAllResponse<T>
    {
        public List<T> Items { get; set; } = new List<T>();
        public int TotalCount { get; set; }

        public GetAllResponse() { }

        public GetAllResponse(List<T> items)
        {
            Items = items;
            TotalCount = items.Count;
        }

        public GetAllResponse(List<T> items, int totalCount)
        {
            Items = items;
            TotalCount = totalCount;
        }
    }
}
