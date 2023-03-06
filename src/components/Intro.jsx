import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
=======
import { faUser } from "@fortawesome/free-regular-svg-icons";
>>>>>>> 8025f40effc8070d8d957635c12561e9d15cfa3d

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center text-black pt-20 text-xl font-body">
      <div className="border-transparent border-b-4 hover:border-knight-900 cursor-pointer">
        <a href="/">
          <h1 className="font-bold text-4xl font-montserrat uppercase md:text-5xl">
            log my fitness
          </h1>
        </a>
      </div>

      <p className="pt-5 pb-6 italic">
        LogMyFitness is designed to replace your paper workout journal
      </p>

      {/* Background UI behind the image */}
      <div className=" min-h-screen flex items-center justify-center px-8">
        <div className="relative w-full max-w-lg">
          {/* 1st Circle (hidden) */}
          {/* !mix-blend-multiply to combine the circles */}
          <div className="absolute bottom-4 left-2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div>
          {/* 2nd Circle */}
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-10"></div>
          {/* 3rd Circle */}
          <div className="absolute top-0 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-10"></div>
          <div className="m-8 relative space-y-4">
            <div className="p-5 flex items-center justify-between space-x-8">
              {/* How close the circles will be beside each other */}
              <div>
                <div className="w-24 h-6"></div>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between space-x-8"></div>
          </div>
        </div>
        {/* Background hero image */}
        <div className="object-scale-down absolute  w-full md:w-4/5 lg:w-4/5 sm:w-48">
<<<<<<< HEAD
          <img src="assets\fitness-app.webp" alt="" />
=======
          <img src="/assets/fitness-app.webp" alt="" />
>>>>>>> 8025f40effc8070d8d957635c12561e9d15cfa3d
        </div>
        {/* END */}
      </div>
      {/* END */}
      <div className="relative bottom-0 left-0 w-full overflow-hidden line-height rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          className="relative w-full h-99"
        >
          {/* <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill="#404041"></path> */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ed7332"
          ></path>
        </svg>
      </div>

      {/* Information prompts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-white  px-6 py-12 md: py-20 bg-knight-900 font-body">
        <div className="flex flex-col justify-center">
          <FontAwesomeIcon icon={faCircleInfo} size="2x" color="" />
          <p className="mb-6">
            Welcome to LogMyFitness! As soon as you arrive, you'll notice that
            we've kept things simple and minimalist, so that you can focus on
            what matters most: your fitness goals. One of the key features of
            our app is the ability to create your own workout logs, which you
            can then share with others via a list.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <FontAwesomeIcon icon={faThumbsUp} size="2x" color="" />
          <p className="mb-6">
            Whether you want to keep your logs private, or share them publicly
            to inspire others, our app makes it easy to stay accountable and
            motivated. Adding exercises to your workout log is also a breeze.
            You can easily search for and select the exercises that are right
            for you, without any fuss or hassle.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <FontAwesomeIcon icon={faHeart} size="2x" color="" />
          <p className="mb-6">
            If you're looking for a fitness tracker app that is both effective
            and user-friendly, look no further than our app. With its minimalist
            design and powerful features, it's the perfect tool for anyone who
            wants to take their fitness to the next level.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <FontAwesomeIcon icon={faUsers} size="2x" color="" />
          <p className="mb-6">
            {" "}
            Thinking of joining? Sign up today and register to join our
            community of like-minded individuals! Registration is quick, easy
            and completely free. By creating an account, you'll be able to
            interact with other members, share your thoughts and opinions, and
            even participate in discussions and events.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Intro;
