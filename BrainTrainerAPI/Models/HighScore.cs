using System;
using System.Collections.Generic;

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
        public double TimeBetweenClicksAverage { get; set; }

        public HighScore()
        {
        }
        public HighScore(int CorrectAnswers, int TotalAnswers, User User, DateTime TimeCreated, double TimeBetweenClicksArray)
        {
            this.CorrectAnswers = CorrectAnswers;
            this.TotalAnswers = TotalAnswers;
            this.User = User;
            this.TimeCreated = TimeCreated;
            this.TimeBetweenClicksAverage = TimeBetweenClicksArray;
        }

    }
}