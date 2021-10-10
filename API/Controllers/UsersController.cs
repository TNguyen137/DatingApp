using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        //Get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers() {
            //get results of a task and then await it and then unwrap from task and return list of users
            return await _context.Users.ToListAsync();
        }

        //Example usage /api/users/3
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id) {
            //async get single user based on Id.
            return await _context.Users.FindAsync(id);
        }
    }
}