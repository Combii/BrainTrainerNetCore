using System;
using System.Threading.Tasks;
using BrainTrainerAPI.Dtos;
using BrainTrainerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Data
{
    public class HighScoreRepository : IHighScoreRepository
    {
        private readonly DataContext _context;
        private readonly IBrainTrainerRepository _BrainTrainerRepo;
        public HighScoreRepository(DataContext context, IBrainTrainerRepository BrainTrainerRepo)
        {
            _context = context;
            _BrainTrainerRepo = BrainTrainerRepo;
        }
        public async Task<HighScore> GetHighScore(int id)
        {
            var value = await _context.HighScores.FirstOrDefaultAsync(x => x.Id == id);
            return value; 
        }

        public async Task<User> PostHighscore(HighScoreDto highScoreDto)
        {
            var user = await _BrainTrainerRepo.GetUser(highScoreDto.UserId, false);

            var highScore = new HighScore(highScoreDto.CorrectAnswers, highScoreDto.TotalAnswers, user, DateTime.Now);

            user.HighScores.Add(highScore);

            await _context.SaveChangesAsync();

            return user;
        }
    }
}