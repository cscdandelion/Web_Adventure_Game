using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Assignment4WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers;

namespace Assignment4WebApi.Controllers
{
    //[EnableCors(origins: "", headers: "", methods: "*")]
    public class GameController : Controller
    {
        EventManager em = new EventManager();
        List<String> eventListDungeon = new List<String>();
        List<String> eventListDungeonDoor1 = new List<String>();
        List<String> eventListDungeonDoor2 = new List<String>();
        List<String> eventListDungeonDoor3 = new List<String>();
        List<String> eventListDungeonDoor2_result = new List<String>();

        List<String> eventListCastle = new List<String>();
        List<String> eventListCastleDoor1 = new List<String>();
        List<String> eventListCastleDoor2 = new List<String>();

        List<String> eventListCastleMirrorPast = new List<String>();
        List<String> eventListCastleMirrorClearMemories = new List<String>();
        List<String> eventListCastleMirrorKeepMemories = new List<String>();


        List<String> eventListCastleMirrorFuture = new List<String>();



        public IActionResult Index()
        {
            return View();
        }

        // GET: api/<controller>/DungeonDoor
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<String> DungeonDoor()
        {
            eventListDungeon.Add("Hi Again! So, you have choosen Dungeon..Well, let's see how your destiny works out:");
            eventListDungeon.Add("Door 1");
            eventListDungeon.Add("Door 2");
            eventListDungeon.Add("Door 3");
            return eventListDungeon;
        }

        // GET: api/<controller>/DungeonDoor/1
        [HttpGet]
        [Route("api/[controller]/[action]/{id}")]
        public IEnumerable<String> DungeonDoor(int id)
        {
            //Jump from mountain
            if (id == 1)
            {
                eventListDungeonDoor1.Add("Ouch! you have chosen a bad option");
                eventListDungeonDoor1.Add("Jump from the top of the Mountain");
                return eventListDungeonDoor1;
            }
            //Devil
            else if (id == 2)
            {
                eventListDungeonDoor2.Add("Here, you encountered with an orc: What will you choose?");
                eventListDungeonDoor2.Add("Attack");
                eventListDungeonDoor2.Add("Run");
                return eventListDungeonDoor2;
            }
            //Gold
            else if (id == 3)
            {
                eventListDungeonDoor3.Add("Hint: You will get beautiful princess as well as gold if you solve the below question:");
                eventListDungeonDoor3.Add("Question: Who is the President of China?");
                eventListDungeonDoor3.Add("Option 1: Jinping Xi");
                eventListDungeonDoor3.Add("Option 2: Donald Trump");
                return eventListDungeonDoor3;
            }
            return eventListDungeonDoor3;
        }

        //CastleDoor
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<String> CastleDoor()
        {
            eventListCastle.Add("Welcome to the castle! The real adventure starts now:");
            eventListCastle.Add("Full of Life");
            eventListCastle.Add("Frozen Park");
            return eventListCastle;
        }

        //CastleDoor/id
        [HttpGet]
        [Route("api/[controller]/[action]/{id}")]
        public IEnumerable<String> CastleDoor(int id)
        {
            //castledoor/fullofLife
            if (id == 1)
            {
                eventListCastleDoor1.Add("Mirror! Time Machine? Want to travel in time?");
                eventListCastleDoor1.Add("You can see the future");
                eventListCastleDoor1.Add("You can see the Past");
                return eventListCastleDoor1;
            }
            //castledoor/FrozenPark
            else if (id == 2)
            {
                eventListCastleDoor2.Add("Hint: Choose wisely! you can die here:");
                eventListCastleDoor2.Add("Wizard: Run out of the Game");
                eventListCastleDoor2.Add("Woho! A flying broom");
                eventListCastleDoor2.Add("All your wishes come true but you have to stay here!");
                return eventListCastleDoor2;
            }
            return eventListDungeonDoor3;
        }

        //CastleDoorPast
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<String> CastleMirrorPast()
        {
            eventListCastleMirrorPast.Add("Do you want to restart your life?");
            eventListCastleMirrorPast.Add("Clear Memories");
            eventListCastleMirrorPast.Add("Keep Memories");
            return eventListCastleMirrorPast;
        }

        // /game/CastleMirrorPast/1
        [HttpGet]
        [Route("api/[controller]/[action]/{id}")]
        public IEnumerable<String> CastleMirrorPast(int id)
        {
            //id==1--castleMirrirPast/clearMemories


            if (id == 1)
            {
                eventListCastleMirrorClearMemories.Add("Hint: You can win the game if you answer it correctly:");
                eventListCastleMirrorClearMemories.Add("Question: Who is the Prime Minister of India?");
                eventListCastleMirrorClearMemories.Add("Option 1: Shahrukh Khan");
                eventListCastleMirrorClearMemories.Add("Option 2: Narendra Modi");
                return eventListCastleMirrorClearMemories;
            }
            //id==2--castleMirrirPast/keepMemories
            else
            {
                eventListCastleMirrorKeepMemories.Add("Hint: You can win the game and get your ex back if you answer it correctly:");
                eventListCastleMirrorKeepMemories.Add("Question: What will be the value of this?");
                eventListCastleMirrorKeepMemories.Add("https://www.telegraph.co.uk/content/dam/news/2017/01/27/mcdonalds-maths-puzzle-answer-facebook_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.PNG?imwidth=450");
                return eventListCastleMirrorKeepMemories;
            }
            //return eventListCastleMirrorPast;
        }


        //CastleDoorFuture
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<String> CastleMirrorFuture()
        {
            eventListCastleMirrorFuture.Add("Future! Hmm! Answer this Riddle and WIN:");
            eventListCastleMirrorFuture.Add("What is often returned but is never borrowed?");
            return eventListCastleMirrorFuture;
        }


    }
}