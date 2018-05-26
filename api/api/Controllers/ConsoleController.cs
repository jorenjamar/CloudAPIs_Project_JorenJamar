using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
    }
}