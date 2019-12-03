namespace BrainTrainerAPI.Dtos
{
    public class HighScoreForReturnDto
    {
        public int CorrectAnswers { get; set; }
        public int TotalAnswers { get; set; }
        public double TimeBetweenClicksAverage { get; set; }
    }
}