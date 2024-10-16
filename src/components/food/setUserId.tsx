"use client";

import useBodyPageActions from "@/hooks/bodyPage/useBodyPageActions";
import useFoodActions from "@/hooks/food/useFoodActions";

const SetUserId: React.FC<{ userId: string }> = ({ userId }) => {
  const { updateCurrentUserId } = useFoodActions();
  const { updateCurrentBodyPageUserId } = useBodyPageActions();
  updateCurrentUserId(userId);
  updateCurrentBodyPageUserId(userId);

  return <div></div>;
};

export default SetUserId;
