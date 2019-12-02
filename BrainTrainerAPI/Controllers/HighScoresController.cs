using System;
using System.Threading.Tasks;
using BrainTrainerAPI.Data;
using BrainTrainerAPI.Dtos;
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
        private readonly IHighScoreRepository _HighScoreRepo;
        private readonly IBrainTrainerRepository _BrainTrainerRepo;
        private readonly DataContext _context;
        public HighScoresController(DataContext context, 
        IBrainTrainerRepository BrainTrainerRepo, IHighScoreRepository HighScoreRepo)
        {
            _context = context;
            _BrainTrainerRepo = BrainTrainerRepo;
            _HighScoreRepo = HighScoreRepo;
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
            var highScore = await _HighScoreRepo.GetHighScore(id);

            return Ok(highScore);
        }

        [HttpPost]
        public async Task<IActionResult> PostHighscore(HighScoreDto highScoreDto)
        {
            await _HighScoreRepo.PostHighscore(highScoreDto);
            return Ok();
        }


    }
}