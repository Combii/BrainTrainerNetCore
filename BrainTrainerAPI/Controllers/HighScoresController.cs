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
            var value = await _context.HighScores.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

        [HttpPost]
        public async Task<ActionResult<HighScore>> PostHighscore(HighScore highScore)
        {
            _context.HighScores.Add(highScore);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetHighscore), new { id = highScore.Id }, highScore);
        }


    }
}