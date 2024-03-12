import { motion } from "framer-motion";
import react, { useEffect, useState } from "react";

const useSimulatedProgress = (isLoading,percentage) => {
  const [progress, setProgress] = useState(0);
  let [startTimestamp] = useState(Date.now());
  let [updateTime, setUpdateTime] = useState(250);
  useEffect(() => {
    if (!isLoading ) {
      setProgress(100);
      return; // Exit early since the target progress is reached
    }

    let elapsed = 0;
    const maxProgress = 99.9; // Max progress to simulate never fully completing
    let newProgress = 0;

    const updateProgress = () => {
      elapsed = (Date.now() - startTimestamp) / 1000; // Convert ms to s
      // Apply the reciprocal function with adjustments for smoother progress
      newProgress =
        Math.min(maxProgress, 100 * (1 - 1 / (1 + Math.pow(elapsed / 3, 2)))) +
        newProgress;

      setUpdateTime(Math.pow(elapsed, 2) * 10);
      setProgress(newProgress);
    };
    const intervalId = setInterval(() => {
      updateProgress();
      if (progress >= maxProgress) {
        clearInterval(intervalId); // Stop the interval if max progress is reached
      }
    }, updateTime); // Update progress every 250ms

    //   console.log(progress)
    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [percentage, progress]);
  return progress;
};

const ProgressBar = ( {isLoading,percentage="null"} ) => {
  const progress = useSimulatedProgress(isLoading,percentage);
  //   console.log(progress);
  return (
    <div className="w-full h-1 overflow-hidden bg-gray-200">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-500 to-lime-400"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
