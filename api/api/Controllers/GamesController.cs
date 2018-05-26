﻿using System;
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
        public List<Game> GetAllGames()
        {
            return context.Games.Include(d => d.Console).ToList();
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
    }
}