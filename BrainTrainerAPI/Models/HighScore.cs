using System;

namespace BrainTrainerAPI.Models
{
    public class HighScore
    {
        public int Id { get; set; }
        public int CorrectAnswers { get; set; }
        public int TotalAnswers { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public DateTime TimeCreated { get; set; }

        public HighScore()
        {
        }
        public HighScore(int CorrectAnswers, int TotalAnswers, User User, DateTime TimeCreated)
        {
            this.CorrectAnswers = CorrectAnswers;
            this.TotalAnswers = TotalAnswers;
            this.User = User;
            this.TimeCreated = TimeCreated;
        }

    }
}