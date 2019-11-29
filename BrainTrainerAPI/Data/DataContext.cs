using BrainTrainerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BrainTrainerAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext>  options) : base (options) {}

        public DbSet<HighScore> HighScores { get; set; }
    }
}