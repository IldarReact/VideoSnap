import { Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import useContactForm from "./useContactForm";
import SuccessMessage from "./components/SuccessMessage";
import FormSkeleton from "./components/FormSkeleton";
import ContactFormFields from "./components/ContactFormFields";

const ContactForm = () => {
  const {
    isSubmitting,
    isSubmitted,
    submittedName,
    errors,
    register,
    handleSubmit,
    onSubmit,
    errorMessage,
  } = useContactForm();

  return (
    <>
      <Helmet>
        <title>Contact Us - Video Snap</title>
        <meta name="description" content="Get in touch with us!" />
        <meta property="og:title" content="Contact Us - Video Snap" />
        <meta property="og:description" content="Get in touch with us!" />
        <meta property="og:url" content="https://your-site.com/contact" />
        <meta name="twitter:title" content="Contact Us - Video Snap" />
        <meta name="twitter:description" content="Get in touch with us!" />
      </Helmet>
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            {isSubmitted ? (
              <SuccessMessage name={submittedName} />
            ) : isSubmitting ? (
              <FormSkeleton />
            ) : (
              <ContactFormFields
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errorMessage={errorMessage}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactForm;