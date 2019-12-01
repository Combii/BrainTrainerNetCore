using System.Threading.Tasks;
using BrainTrainerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Data
{
    public class HighScoreRepository : IHighScoreRepository
    {
        private readonly DataContext _context;
        public HighScoreRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<HighScore> GetHighScore(int id)
        {
            var value = await _context.HighScores.FirstOrDefaultAsync(x => x.Id == id);
            return value; 
        }

        public Task<HighScore> PostHighscore(int Score, int UserId)
        {
            return null;
        }
    }
}