namespace BrainTrainerAPI.Dtos
{
    public class HighScoreDto
    {
        public int UserId { get; set; }
        public int CorrectAnswers { get; set; }
        public int TotalAnswers { get; set; }
    }
}