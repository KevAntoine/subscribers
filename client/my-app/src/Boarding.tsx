import Form from "./Form";

export default function Boarding({ step }: { step: string }) {
  let component;
  switch (step) {
    case "welcome":
      component = (
        <div>
          <p className="welcome">Want to open an bank account?</p>
        </div>
      );
      break;
    case "info":
      component = (
        <div>
          <p className="welcome">Do you have a business?</p>
        </div>
      );
      break;
    case "details":
      component = (
        <div>
          <p className="welcome">Which language do prefer to speak with your Bank?</p>
        </div>
      );
      break;
    case "contact":
      component = (
        <div>
          <Form />
        </div>
      );
      break;
    case "goodbye":
      component = <div>Your ongoing events</div>;
      break;
    default:
      component = <div>Your current feed</div>;
  }
  return component;
}
