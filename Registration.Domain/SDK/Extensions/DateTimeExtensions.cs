using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Domain.Extensions
{
    public static class DateTimeExtensions
    {
        public static bool IsEarlierThan(this DateTime date, DateTime anotherDate) => date < anotherDate;
        public static bool IsLaterThan(this DateTime date, DateTime anotherDate) => date > anotherDate;
        public static bool IsYearsLaterThan(this DateTime date, int years)
        {
            int yearsToDecrement = years * (-1);
            var yearsAgo = DateTime.Now.Date.AddYears(yearsToDecrement);
            return date.IsLaterThan(yearsAgo);
        }
    }
}
