import RegisterForm from "@/components/register-form";

const RegisterPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Register</h1>
      <p className="md:text-lg text-muted-foreground text-center mb-10">
        This is just a demo registration form. It has no real backend code
        attached to it.
      </p>
      <div className="mt-10 flex flex-col gap-5 items-center w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
