import React from "react";

const EmptyBlock = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse mt-8">
      <h2 className="text-2xl font-semibold ">Ooops, there's empty...</h2>
      <img className="w-20 h-20 " src="/images/empty.svg" alt="empty" />
    </div>
  );
};

export default EmptyBlock;
