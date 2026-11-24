
import { useState } from "react";

function useForm(initialValues) {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const resetForm = () => {
        setFormData(initialValues);
    };

    return {
        formData,
        setFormData,
        handleChange,
        resetForm,
    };
}

export default useForm;
