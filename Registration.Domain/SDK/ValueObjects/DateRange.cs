using System;
using System.Collections.Generic;
using Registration.Domain.Exceptions;
using Registration.Domain.Extensions;

namespace Registration.Domain.ValueObjects
{
    public class DateRange : ValueObject
    {
        public DateTime StartDate { get; private set; }

        public DateTime EndDate { get; private set; }
        
        public int Days => EndDate.Subtract(StartDate).Days;

        private DateRange() { }
        
        public DateRange(DateTime startDate, DateTime endDate)
        {
            if (endDate.IsEarlierThan(startDate)) throw new DateRangeException("End date must not be earlier then start date");
            StartDate = startDate;
            EndDate = endDate;
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return StartDate;
            yield return EndDate;
        }

        public bool IsMonthOnRange(int month) => StartDate.Month <= month && month <= EndDate.Month;
        public bool IsOnRange(DateTime date) => StartDate <= date && date <= EndDate;
        public bool IsOnRange(DateTime? date) => date != null && IsOnRange(date.Value);
        public bool IsOnRange(DateRange dateRange) => StartDate <= dateRange.StartDate && dateRange.EndDate <= EndDate;
    }
}