using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace api.Controllers
{
    [Route("api/v1/consoles")]

    public class ConsoleController : Controller
    {
        private readonly LibraryContext context;

        public ConsoleController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]       //api/v1/consoles
        public List<PokeConsole> GetAllConsoles()
        {
            return context.Consoles.ToList();
        }

        [HttpPost]
        public IActionResult CreateConsole([FromBody] PokeConsole newConsole)
        {
            context.Consoles.Add(newConsole);
            context.SaveChanges();
            return Created("", newConsole);
        }

        [Route("{id}")] //api/v1/consoles/1
        [HttpGet]
        public IActionResult GetGame(int id)
        {
            var console = context.Consoles.Find(id);
            if (console == null)
                return NotFound();

            return Ok(console);
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteConsole(int id)
        {
            var console = context.Consoles.Find(id);

            //console verwijderen ..
            context.Consoles.Remove(console);
            context.SaveChanges();
            return NoContent();
        }
    }
}