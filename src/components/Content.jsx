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
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 text-xl border-2px-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Your Workout</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="mb-4">
            <label className="block font-bold mb-2">
              {`Exercise ${exerciseIndex + 1}`}
            </label>
            <div className="flex mb-2">
              <select
                value={exercise.exercise}
                onChange={(event) => handleExerciseChange(event, exerciseIndex)}
                className="flex-1 mr-2"
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
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </div>
            <div className="flex">
              <label className="block font-bold mr-2">Sets</label>
              {exercise.sets.map((set, setIndex) => (
                <input
                  key={setIndex}
                  type="number"
                  value={set}
                  onChange={(event) =>
                    handleSetChange(event, exerciseIndex, setIndex)
                  }
                  className="mr-2"
                />
              ))}
              <button
                type="button"
                onClick={() => handleAddSet(exerciseIndex)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                Add Set
              </button>
            </div>
            <div className="flex">
              <label className="block font-bold mr-2">Reps</label>
              {exercise.reps.map((rep, setIndex) => (
                <input
                  key={setIndex}
                  type="number"
                  value={rep}
                  onChange={(event) =>
                    handleRepChange(event, exerciseIndex, setIndex)
                  }
                  className="mr-2"
                />
              ))}
              <button
                type="button"
                onClick={() => handleAddRep(exerciseIndex)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                Add Rep
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExercise}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
      <div className="border border-gray-400 rounded-md p-4">
        <h3 className="font-bold mb-2">Completed Workout:</h3>
        <pre className="whitespace-pre-wrap">{completedWorkout}</pre>
      </div>
    </div>
  );
};

export default Content;
