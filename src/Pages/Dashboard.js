import React, { useContext,useState } from 'react';
import { AuthContext } from '../context/Auth.context.js';
import logo from '../images/logo.png'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const quotes = [
  
  {
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    cite: "Bjarne Stroustrup"
  },

  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    cite: "Thomas A. Edison"
  }, {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    cite: "Steve Jobs"
  }, {
    quote:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it",
    cite: "Henry Ford"
  }, {
    quote:
      "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    cite: "Kevin Hart"
  }, {
    quote:
      "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    cite: " Celine Dion"
  }, {
    quote:
      "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.",
    cite: " John F. Kennedy"
  },


  {
    quote:
      "When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
    cite: " Helen Keller"
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    cite: " Dr. Seuss"
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    cite: "Mark Twain"
  },


  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    cite: "Martin Golding"
  },
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    cite: "Linus Torvalds"
  },
  {
    quote:
      "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    cite: "Alan Kay"
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
    cite: "Larry Wall"
  },
  {
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    cite: "George Carrette"
  }
];

const Dashboard = () => {

  const [index, setIndex] = useState();
  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  };

  const { logout } = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

    return (

      <div className="h-screen ">
        <div className="  h-full">
          
        <h1>
          
  <a className='flex flex-wrap ml-32 mx-auto' href="#" onClick={onLogout}>Logout</a>
</h1>
          <h1 className='text-center w-20 ml-0 mt-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-7  text-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<br/>
            Hello Admin
          </h1>
          <div  className='w-full pl-14 -mt-8 ml-96'><img className='h-48' src={logo}/></div>
          <div className="App">
      <button className=' h-16 w-96  rounded-lg mt-10 mb-4 mx-auto hover:bg-blue-700 text-red-800 bg-blue-300' onClick={generate}><span className='font-bold  text-xl'>Click HERE for Amazing Quotes</span></button>
      <p className='text-4xl text-violet-700 '>{quotes[index] && quotes[index].quote}</p>
      <p className='text-3xl text-orange-400 mt-2 w-full text-center'>{quotes[index] && quotes[index].cite}</p>
    </div>
        </div>
        {/* <div className="ml-80"><Link </Link></div> */}
        
     
    </div>
  
    );
  
  }
  
  export default Dashboard;