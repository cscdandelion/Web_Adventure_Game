using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Assignment4WebApi.Models
{
    public class EventManager
    {
        List<Events> eventList;

        public EventManager()
        {
            try
            {
                if (File.Exists("Events.txt"))
                {
                    eventList = ReadEventsList().ToList();
                }
                else
                {
                    eventList = new List<Events>();
                    WriteEventsList(eventList);
                }
            }
            catch (IOException io)
            {
                Console.WriteLine(io);
            }
        }

        IEnumerable<Events> ReadEventsList()
        {
            return JsonConvert.DeserializeObject<List<Events>>(File.ReadAllText("Events.txt"));
        }

        public void WriteEventsList(IEnumerable<Events> eventList)
        {
            var output = JsonConvert.SerializeObject(eventList);
            File.WriteAllText("Events.txt", output);
        }

        

    }
    
}
