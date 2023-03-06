import React, { useState } from "react";

const Content = () => {
  const [exercises, setExercises] = useState([]);
  const [completedWorkout, setCompletedWorkout] = useState("");

  const exercisesList = [
    {
      muscle: "Chest",
      exercises: ["Bench Press", "Incline Press", "Decline Press", "Flyes"],
    },
    {
      muscle: "Back",
      exercises: ["Deadlifts", "Rows", "Pull-ups", "Lat Pulldowns"],
    },
    {
      muscle: "Arms",
      exercises: [
        "Bicep Curls",
        "Tricep Extensions",
        "Hammer Curls",
        "Skull Crushers",
      ],
    },
    {
      muscle: "Shoulders",
      exercises: [
        "Overhead Press",
        "Lateral Raises",
        "Front Raises",
        "Reverse Flyes",
      ],
    },
    {
      muscle: "Legs",
      exercises: ["Squats", "Lunges", "Deadlifts", "Leg Press"],
    },
  ];

  const handleAddExercise = () => {
    setExercises([...exercises, { exercise: "", sets: [], reps: [] }]);
  };

  const handleExerciseChange = (event, index) => {
    const newExercises = [...exercises];
    newExercises[index].exercise = event.target.value;
    newExercises[index].sets = [0];
    newExercises[index].reps = [0];
    setExercises(newExercises);
  };

  const handleAddSet = (exerciseIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push(0);
    newExercises[exerciseIndex].reps.push(0);
    setExercises(newExercises);
  };

  const handleAddRep = (exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].reps[setIndex] += 1;
    setExercises(newExercises);
  };

  const handleSetChange = (event, exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets[setIndex] = parseInt(event.target.value);
    setExercises(newExercises);
  };

  const handleRepChange = (event, exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].reps[setIndex] = parseInt(event.target.value);
    setExercises(newExercises);
  };

  const handleRemoveExercise = (exerciseIndex) => {
    const newExercises = [...exercises];
    newExercises.splice(exerciseIndex, 1);
    setExercises(newExercises);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const completedExercises = exercises.map((exercise) => {
      const setsList = exercise.sets.join(", ");
      const repsList = exercise.reps.join(", ");
      return `${exercise.exercise}: ${setsList} sets, ${repsList} reps`;
    });
    const workout = completedExercises.join("\n");
    console.log(workout);
    setCompletedWorkout(workout);
  };

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 text-xl text-white bg-knight-900 border-2px-4 font-body  shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Your Workout</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="mb-4">
            <label className="block font-bold mb-2">
              {`Exercise ${exerciseIndex + 1}`}
            </label>
            <div className="flex flex-col md:flex-row mb-2">
              <select
                value={exercise.exercise}
                onChange={(event) => handleExerciseChange(event, exerciseIndex)}
                className="flex-1 mr-2 bg-white text-black rounded"
              >
                <option value="" disabled>
                  Select Exercise
                </option>
                {exercisesList.map((muscleGroup, muscleIndex) => (
                  <optgroup key={muscleIndex} label={muscleGroup.muscle}>
                    {muscleGroup.exercises.map((exerciseOption) => (
                      <option key={exerciseOption} value={exerciseOption}>
                        {exerciseOption}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleRemoveExercise(exerciseIndex)}
                className="bg-slate-600 hover:bg-slate-900 text-white font-bold p-2 rounded"
              >
                Remove
              </button>
            </div>
            <div className="flex flex-col md:flex-row  pt-5">
              <label className="block font-bold sm:mr-2">Sets</label>
              {exercise.sets.map((set, setIndex) => (
                <input
                  key={setIndex}
                  type="number"
                  value={set}
                  onChange={(event) =>
                    handleSetChange(event, exerciseIndex, setIndex)
                  }
                  className="w-full md:w-auto mr-2 mb-2 text-black rounded"
                />
              ))}
              <button
                type="button"
                onClick={() => handleAddSet(exerciseIndex)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded w-full md:auto mt=2 md:mt-0"
              >
                Add Set
              </button>
            </div>
            <div className="flex flex-col md:flex-row pt-5">
              <label className="block font-bold sm:mr-2 ">Reps</label>
              {exercise.reps.map((rep, setIndex) => (
                <input
                  key={setIndex}
                  type="number"
                  value={rep}
                  onChange={(event) =>
                    handleRepChange(event, exerciseIndex, setIndex)
                  }
                  className="md:w-auto mr-2 w-full mb-2 text-black rounded"
                />
              ))}
              <button
                type="button"
                onClick={() => handleAddRep(exerciseIndex)}
                className="w-full md:w-auto bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
              >
                Add Rep
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExercise}
          className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-1 px-2 rounded mb-3 md:mb-0 md:mr-4"
        >
          Add Exercise
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="border-4 border-white p-10 rounded-md mt-5 ">
        <h3 className="font-bold mb-2">Completed Workout:</h3>
        <pre className="whitespace-pre-wrap">{completedWorkout}</pre>
      </div>
    </div>
  );
};

export default Content;
