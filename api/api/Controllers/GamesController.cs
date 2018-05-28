using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace api.Controllers
{
    [Route("api/v1/games")]
    public class GamesController : Controller
    {
        private readonly LibraryContext context;

        public GamesController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]       //api/v1/games
        public List<Game> GetAllGames(string name, string releaseyear, string console, string sort, int? page, int length = 10, string dir = "asc")
        {
            IQueryable<Game> query = context.Games.Include(d => d.Console);

            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Name == name);
            if (!string.IsNullOrWhiteSpace(releaseyear))
                query = query.Where(d => d.ReleaseYear == releaseyear);
            if (!string.IsNullOrWhiteSpace(console))
                query = query.Where(d => d.Console.Name == console);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "releaseyear":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.ReleaseYear);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.ReleaseYear);
                        break;
                    case "console":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Console.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Console.Name);
                        break;
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Name);
                        break;
                }
            }

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            return query.ToList();
        }
        [HttpPost]
        public IActionResult CreateGame([FromBody] Game newGame)
        {
            context.Games.Add(newGame);
            context.SaveChanges();
            return Created("", newGame);
        }
        [HttpPut]
        public IActionResult UpdateConsole([FromBody] Game updateGame)
        {
            var orgConsole = context.Games.Find(updateGame.Id);
            if (orgConsole == null)
                return NotFound();

            orgConsole.Name = updateGame.Name;
            orgConsole.ConsoleId = updateGame.ConsoleId;
            orgConsole.ReleaseYear = updateGame.ReleaseYear;

            context.SaveChanges();
            return Ok(orgConsole);
        }

        [Route("{id}")] //api/vi/games/1
        [HttpGet]
        public IActionResult GetGame(int id)
        {
            var game = context.Games
                .Include(d => d.Console)
                .SingleOrDefault(d => d.Id == id);
            if (game == null)
                return NotFound();

            return Ok(game);
        }
        [Route("{id}")] //api/vi/games/1
        [HttpDelete]
        public IActionResult DeleteGame(int id)
        {
            var game = context.Games.Find(id);

            //console verwijderen ..
            context.Games.Remove(game);
            context.SaveChanges();
            return NoContent();
        }
    }
}