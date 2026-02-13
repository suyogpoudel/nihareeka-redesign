import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <div className="mt-10 flex flex-col gap-5 items-center w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
