namespace BrainTrainerAPI.Models
{
    public class HighScore
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public User User { get; set; }
    }
}