using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrainTrainerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Data
{
    public class BrainTrainerRepository : IBrainTrainerRepository
    {
        private readonly DataContext _context;
        public BrainTrainerRepository(DataContext context)
        {
            _context = context;
        }
        

        public async Task<User> GetUser(int id, bool isCurrentUser)
        {
            var query = _context.Users.AsQueryable();

            if (isCurrentUser)
                query = query.IgnoreQueryFilters();

            var user = await query
            .Include(p => p.HighScores)
            .FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users
            .Include(p => p.HighScores)
            .ToListAsync();
            return users;
        }
    }
}