using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment4WebApi.Controllers;
using Assignment4WebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
  
    [ApiController]
    public class UserController : ControllerBase
    {
    
        public static List<User> users = new List<User>();
        public static User cur;
        public static Boolean flag = true;

        

        [HttpGet]
        [Route("api/[controller]")]
        public IEnumerable<User> Get()
        {
           // newsCompare com = new newsCompare();
          //  users.Sort((IComparer<User>)com);  

            return users;
        }

        // POST api/values
        [HttpPost]
        [Route("api/[controller]/{id}")]
        public ActionResult<User> Post(int id , Loginfo logInfo)
        {

            if (id == 1)
            {
                foreach (User u in users)
                {
                    if (String.Equals(u.UserName, logInfo.UserName) && String.Equals(u.PassWord, logInfo.PassWord))
                    {
                        cur = u;
                        return Ok(cur);
                    }
                }
                return NotFound();

            }
            else 
            {
                foreach (User user in users)
                {
                    if (string.Equals(user.UserName, logInfo.UserName))
                    {
                        return NotFound();
                    }
                }
                User u = new User { UserName = logInfo.UserName, PassWord = logInfo.PassWord, Progress="new", UserId = users.Count ,Points=0,Type="empty"};
                users.Add(u);
                cur = u;
                return Ok(cur);
            }
       
        }

        // PUT api/values/5
        [HttpPut]
        [Route("api/[controller]")]
        public ActionResult Put(SavingData progress)
        {
            cur.Progress = progress.Progress;
            cur.Type = progress.Type;
            return Ok();
        }
        // PUT api/values/5
        [HttpPut]
        [Route("api/[controller]/[action]/{points}")]
        public ActionResult<int> Points(int points)
        {
            cur.Points = cur.Points + points;
            return Ok(cur.Points);
        }






    }
}