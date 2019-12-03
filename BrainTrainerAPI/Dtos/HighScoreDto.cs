using System.Collections.Generic;

namespace BrainTrainerAPI.Dtos
{
    public class HighScoreDto
    {
        public int UserId { get; set; }
        public int CorrectAnswers { get; set; }
        public int TotalAnswers { get; set; }
        public IEnumerable<double> TimeBetweenClicksArray { get; set; }
    }
}