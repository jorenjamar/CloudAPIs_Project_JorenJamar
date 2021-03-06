﻿using Models;
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

            if (!context.Consoles.Any())
            {
                var gb = new PokeConsole()
                {
                    Name = "GameBoy"
                };
                context.Consoles.Add(gb);
                context.SaveChanges();
            }

            if (!context.Games.Any())
            {

                var rnb = new Game()
                {
                    Name = "Pokemon Red and Blue",
                    ReleaseYear = "1996",
                    ConsoleId = 1
                };
                context.Games.Add(rnb);
                context.SaveChanges();
            }
        }
    }
}
