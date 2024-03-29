using System;
using System.Linq;
using AutoMapper;
using BrainTrainerAPI.Dtos;
using BrainTrainerAPI.Models;

namespace BrainTrainerAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<HighScoreDto, HighScore>()
            .ForMember(h=>h.TimeBetweenClicksAverage, 
            m=>m.MapFrom(u=>Math.Round(u.TimeBetweenClicksArray.Average(),2)));
            CreateMap<HighScore,HighScoreForReturnDto>();


            
        }
    }
}