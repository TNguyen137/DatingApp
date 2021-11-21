using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTO;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{    
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        //Get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers() {
            //get results of a task and then await it and then unwrap from task and return list of users
            var users = await _userRepository.GetMembersAsync();

            //var usersToReturn = _mapper.Map<IEnumerable<MemberDTO>>(users);

            return Ok(users);
        }

        //Example usage /api/users/'userName'
        [HttpGet("{userName}")]
        public async Task<ActionResult<MemberDTO>> GetUser(string userName) {
            //async get single user based on Id.
            // var user = await _userRepository.GetUserByUserNameAsync(userName);
            //return _mapper.Map<MemberDTO>(user);
            return await _userRepository.GetMemberAsync(userName);
        }
    }
}