import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center text-black pt-20 text-xl">
      <h1 className="text-4xl font-black font-Rubik">Log My Fitness</h1>

      <p className="pt-5 pb-6 italic">
        LogMyFitness is designed to replace your paper workout journal
      </p>

      {/* Background UI behind the image */}
      <div class=" min-h-screen flex items-center justify-center px-8">
        <div class="relative w-full max-w-lg">
          {/* 1st Circle (hidden) */}
          {/* !mix-blend-multiply to combine the circles */}
          <div class="absolute -bottom-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div>
          {/* 2nd Circle */}
          <div class="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-10"></div>
          {/* 3rd Circle */}
          <div class="absolute top-0 left-10 w-72 h-72 bg-midnight-950 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-10"></div>
          <div class="m-8 relative space-y-4">
            <div class="p-5 flex items-center justify-between space-x-8">
              {/* How close the circles will be beside each other */}
              <div>
                <div class="w-24 h-6"></div>
              </div>
            </div>
            <div class="p-5 flex items-center justify-between space-x-8"></div>
          </div>
        </div>
        {/* Background hero image */}
        <div className="object-scale-down absolute">
          <img src="/assets/fitness-app.webp" alt="" />
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
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill="black"></path>
        </svg>
      </div>

      {/* Information prompts */}
      <p className="flex items-center justify-center flex-col text-center text-white pt-20 pb-6 px-40 bg-black">
        <p className="pt-5">
          <p>
            <FontAwesomeIcon icon={faCircleInfo} size="2x" color="dodgerblue" />
          </p>
          Welcome to LogMyFitness! As soon as you arrive, you'll notice that
          we've kept things simple and minimalist, so that you can focus on what
          matters most: your fitness goals. One of the key features of our app
          is the ability to create your own workout logs, which you can then
          share with others via a list.
        </p>
        <p className="pt-20">
          <p>
            <FontAwesomeIcon icon={faThumbsUp} size="2x" color="dodgerblue" />
          </p>
          Whether you want to keep your logs private, or share them publicly to
          inspire others, our app makes it easy to stay accountable and
          motivated. Adding exercises to your workout log is also a breeze. You
          can easily search for and select the exercises that are right for you,
          without any fuss or hassle.
        </p>
        <p className="pt-20">
          <p>
            <FontAwesomeIcon icon={faHeart} size="2x" color="dodgerblue" />
          </p>
          If you're looking for a fitness tracker app that is both effective and
          user-friendly, look no further than our app. With its minimalist
          design and powerful features, it's the perfect tool for anyone who
          wants to take their fitness to the next level.
        </p>
      </p>
    </div>
  );
  {
    /* END */
  }
}
export default Intro;
