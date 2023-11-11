import React from "react";
import { useForm} from "react-hook-form";

const SwapScreen = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-1/3 w-1/3 font-bold bg-snow-500 border-2 mt-5 border-gunmetal rounded-3xl flex flex-col justify-center items-center"
    >
      <h2 className="mb-5">Enter your desired quantity of each token here:</h2>
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-3">
        <label className="text-gunmetal text-end">Swap:</label>
        <input
          {...register("OriginalToken")}
          type="number"
          className="border-2 col-span-2 border-gunmetal w-full h-10 rounded-2xl px-2"
        />
        <label className="text-gunmetal text-end">For:</label>
        <input
          {...register("DesiredToken")}
          type="number"
          className="border-2 col-span-2 border-gunmetal w-full h-10 rounded-2xl px-2"
        />
      </div>
      <button
        type="submit"
        className="bg-amaranth hover:bg-amaranth-600 text-snow mt-5 px-4 py-2 rounded-xl w-28 lg:w-36"
      >
        <span className="font-semibold text-sm lg:text-md">Swap</span>
      </button>
    </form>
  );
};
export default SwapScreen;
