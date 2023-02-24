import Form from "../../components/festival/Form";
import toast from "react-hot-toast";

const index = () => {
  async function addEmailHandler(email, emailRef) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FIREBASE_URL}/Email.json`,
      {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
    console.log(response);

    emailRef = null;
  }

  return <Form onAddEmail={addEmailHandler} />;
};
export default index;
