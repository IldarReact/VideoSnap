import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValues } from './types';
import { submitForm } from './api';

const useContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true);
        setErrorMessage(null);
        try {
            await submitForm(data);
            setSubmittedName(data.name);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('There was an error submitting the form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        isSubmitted,
        submittedName,
        errors,
        register,
        handleSubmit,
        onSubmit,
        errorMessage,
    };
};

export default useContactForm;