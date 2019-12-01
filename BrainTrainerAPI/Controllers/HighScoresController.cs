using System.Threading.Tasks;
using BrainTrainerAPI.Data;
using BrainTrainerAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Controllers
{

    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class HighScoresController : ControllerBase
    {
        private readonly IHighScoreRepository _repo;
        private readonly DataContext _context;
        public HighScoresController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetHighscores()
        {
            var values = await _context.HighScores.ToListAsync();

            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHighscore(int id)
        {
            var highScore = await _repo.GetHighScore(id);

            return Ok(highScore);
        }

        [HttpPost]
        public IActionResult PostHighscore(int Score, int UserId)
        {
            // var user = await _repo.GetUser(UserId, false);

            // var highScore = new HighScore(Score, user);
            
            // _context.HighScores.Add(highScore);
            // await _context.SaveChangesAsync();

            // return Ok(highScore);
            return BadRequest();
        }


    }
}