using System.Collections.Generic;

namespace Models
{
    public class PokeConsole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}
