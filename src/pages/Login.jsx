import { Welcome } from "../components/login/Welcome";
import { Form } from "../components/login/Form";

/**
 * The Login component represents the login page of the website.
 * It combines the 'Welcome' and 'Form' components to create the login page layout.
 */
export const Login = () => {
  return (
    <main>
      <section className="container-login">
        {/* 'Welcome' component for welcoming users */}
        <Welcome />

        {/* 'Form' component for user login form */}
        <Form />
      </section>
    </main>
  );
};
