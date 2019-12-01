using System.Collections.Generic;
using System.Threading.Tasks;
using BrainTrainerAPI.Models;

namespace BrainTrainerAPI.Data
{
    public interface IBrainTrainerRepository
    {
        Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id, bool isCurrentUser);
         
    }
}