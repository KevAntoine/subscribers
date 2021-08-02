import { SubmitHandler, useForm } from "react-hook-form";
import { useAppRegister, useAppState } from "./store";
import { State } from "./types";

const Form = () => {
  const state = useAppState()
  const userRegister = useAppRegister();
  const { register, handleSubmit } = useForm<State>();
  const onSubmit: SubmitHandler<State> = (data) =>
    userRegister({ ...data, password: "welcome", hasBusiness: state.hasBusiness });
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "78vw",
        }}
      >
        <div className="form__group">
          <input className="form__field" {...register("name")} />
          <label className="form__label">Full Name</label>
        </div>
        <div className="form__group">
          <input type="email" className="form__field" {...register("email")} />
          <label className="form__label">Email</label>
        </div>
        {/* <div className="form__group">
          <input className="form__field" {...register("lastName")} />
          <label className="form__label">Whatsapp Number</label>
        </div> */}

        <button className="btc" type="submit">
          Pre-register
        </button>
      </form>
    </div>
  );
};

export default Form;
