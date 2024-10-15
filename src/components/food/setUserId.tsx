"use client";

import useFoodActions from "@/hooks/food/useFoodActions";

const SetUserId: React.FC<{ userId: string }> = ({ userId }) => {
  const { updateCurrentUserId } = useFoodActions();
  updateCurrentUserId(userId);
  return <div></div>;
};

export default SetUserId;
