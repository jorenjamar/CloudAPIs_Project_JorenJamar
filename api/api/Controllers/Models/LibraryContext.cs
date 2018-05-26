using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {

        }
        public DbSet<Game> Games { get; set; }
        public DbSet<PokeConsole> Consoles { get; set; }
    }
}
