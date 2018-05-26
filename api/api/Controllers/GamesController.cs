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
        public List<Game> GetAllGames(string name, string releaseyear, string console, int? page, int length = 10)
        {
            IQueryable<Game> query = context.Games.Include(d => d.Console);

            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Name == name);
            if (!string.IsNullOrWhiteSpace(releaseyear))
                query = query.Where(d => d.ReleaseYear == releaseyear);
            if (!string.IsNullOrWhiteSpace(console))
                query = query.Where(d => d.Console.Name == console);

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