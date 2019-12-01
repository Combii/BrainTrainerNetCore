using System.Threading.Tasks;
using BrainTrainerAPI.Models;

namespace BrainTrainerAPI.Data
{
    public interface IHighScoreRepository
    {
         Task<HighScore> GetHighScore(int id);
         Task<HighScore> PostHighscore(int Score, int UserId);
    }
}