import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 text-xl">
      <h1 className="text-4xl">LOGMYFITNESS</h1>

      <p className="pt-20 pb-6 italic">
        LogMyFitness is designed to replace your paper workout journal.
      </p>
      <p className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-40">
        Welcome to LogMyFitness! As soon as you arrive, you'll notice that we've
        kept things simple and minimalist, so that you can focus on what matters
        most: your fitness goals. One of the key features of our app is the
        ability to create your own workout logs, which you can then share with
        others via a list.
        <p className="pt-20">
          Whether you want to keep your logs private, or share them publicly to
          inspire others, our app makes it easy to stay accountable and
          motivated. Adding exercises to your workout log is also a breeze. You
          can easily search for and select the exercises that are right for you,
          without any fuss or hassle.
        </p>
        <p className="pt-20">
          If you're looking for a fitness tracker app that is both effective and
          user-friendly, look no further than our app. With its minimalist
          design and powerful features, it's the perfect tool for anyone who
          wants to take their fitness to the next level.
        </p>
      </p>
    </div>
  );
}
export default Intro;
