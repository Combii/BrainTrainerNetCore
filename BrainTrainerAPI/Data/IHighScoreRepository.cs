using System.Threading.Tasks;
using BrainTrainerAPI.Dtos;
using BrainTrainerAPI.Models;

namespace BrainTrainerAPI.Data
{
    public interface IHighScoreRepository
    {
         Task<HighScore> GetHighScore(int id);
         Task<User> PostHighscore(HighScoreDto highScoreDto);
    }
}