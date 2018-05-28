namespace Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ReleaseYear { get; set; }
        public PokeConsole Console { get; set; }
        public int ConsoleId { get; set; }
    }
}
