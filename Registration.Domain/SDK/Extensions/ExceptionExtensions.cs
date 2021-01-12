using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Domain.SDK.Extensions
{
    public static class ExceptionExtensions
    {
        public static void WriteOnConsole(this Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
    }
}
