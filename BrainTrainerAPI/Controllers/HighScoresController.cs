using System.Threading.Tasks;
using BrainTrainerAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Controllers
{
    
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
    }
}