using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment4WebApi.Models
{
    public class Events 
    {
        public string eventName { get; set; }

        public Events()
        {

            Hashtable eventTable = new Hashtable();
            eventTable.Add("1.0", "Dungeon door");
            eventTable.Add("1.1", "Dungeon door");
            eventTable.Add("1.2", "Dungeon door");
            eventTable.Add("1.3", "Dungeon door");
            eventTable.Add("2.0", "Castle door");        
        }

        public Events(String eventName)
        {
            this.eventName = eventName;
        }

    }
}
