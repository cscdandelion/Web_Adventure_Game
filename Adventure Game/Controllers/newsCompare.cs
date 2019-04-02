using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment4WebApi.Models;

namespace Assignment4WebApi.Controllers
{
        class newsCompare : IComparer
{
    int IComparer.Compare(object x, object y)
    {

        User newsX = (User)x;
        User newsY = (User)y;
        if (newsX.Points > newsY.Points)
            return -1;
        if (newsX.Points < newsY.Points)
            return 1;
        return 0;
    }
}

}
