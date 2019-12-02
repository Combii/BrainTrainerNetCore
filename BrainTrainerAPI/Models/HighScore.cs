using System;

namespace BrainTrainerAPI.Models
{
    public class HighScore
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public DateTime TimeCreated { get; set; }

        public HighScore()
        {
        }
        public HighScore(int Score, User User, DateTime TimeCreated)
        {
            this.Score = Score;
            this.User = User;
            this.TimeCreated = TimeCreated;
        }

    }
}