using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment4WebApi.Models
{
   public class User
{

    public int UserId { get; set; }
    public string UserName { get; set; }
    public string PassWord { get; set; }
    public string Progress { get; set; }
    public int Points { get; set; }
    public string Type { get; set; }
}
}
