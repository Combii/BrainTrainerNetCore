using System;
using System.Collections.Generic;
using BrainTrainerAPI.Models;

namespace BrainTrainerAPI.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public virtual ICollection<HighScoreForReturnDto> HighScores { get; set; }    
    }
}