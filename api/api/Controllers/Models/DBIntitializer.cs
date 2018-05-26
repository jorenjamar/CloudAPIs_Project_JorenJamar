using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class DBIntitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Games.Any())
            {
                
                var rnb = new Game()
                {
                    Name = "Pokemon Red and Blue",
                    ReleaseYear = "1996"
                };
                context.Games.Add(rnb);
                context.SaveChanges();
            }
        }
    }
}
