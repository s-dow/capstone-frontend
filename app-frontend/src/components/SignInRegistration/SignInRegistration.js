import { SignIn } from "./SignIn";
import { Registration } from "./Registration";

export const SignInRegistration = () => {
  return (
    <main className="content">
      <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
        <SignIn />
        <Registration />
      </div>
    </main>
  );
};
