import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateRandomToken } from "@/lib/features/pulseSlice";

export const useTokenSocket = (isActive: boolean = true) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isActive) return;

    const intervalId = setInterval(() => {
      dispatch(updateRandomToken());
    }, 200);

    // Stop the timer when the user leaves the page
    return () => clearInterval(intervalId);
  }, [isActive, dispatch]);
};