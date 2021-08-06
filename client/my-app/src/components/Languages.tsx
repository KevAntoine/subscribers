import React from "react";
import { useForm } from "react-hook-form";
import { useAppLaguages } from "../store";

export default function App() {
  const userLanguages = useAppLaguages();
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: string[]) => {
    console.log(data);
    userLanguages(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <label>English</label>
        <input type="checkbox" {...register("En")} value="En" />
        <label>French</label>
        <input type="checkbox" {...register("Fr")} value="Fr" />
      </form>
    </div>
  );
}
