using System;
using System.Threading.Tasks;
using AutoMapper;
using BrainTrainerAPI.Dtos;
using BrainTrainerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Data
{
    public class HighScoreRepository : IHighScoreRepository
    {
        private readonly DataContext _context;
        private readonly IBrainTrainerRepository _BrainTrainerRepo;
        private readonly IMapper _mapper;

        public HighScoreRepository(DataContext context, IBrainTrainerRepository BrainTrainerRepo, IMapper mapper)
        {
            _context = context;
            _BrainTrainerRepo = BrainTrainerRepo;
            _mapper = mapper;
        }
        public async Task<HighScore> GetHighScore(int id)
        {
            var value = await _context.HighScores.FirstOrDefaultAsync(x => x.Id == id);
            return value; 
        }

        public async Task<User> PostHighscore(HighScoreDto highScoreDto)
        {
            var user = await _BrainTrainerRepo.GetUser(highScoreDto.UserId, false);

            var highscore = _mapper.Map<HighScore>(highScoreDto);

            user.HighScores.Add(highscore);

            await _context.SaveChangesAsync();

            return user;
        }
    }
}