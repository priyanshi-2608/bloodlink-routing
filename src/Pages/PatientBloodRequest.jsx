import useForm from "../hooks/useForm";

import { showSuccess, showError } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function PatientBloodRequest() {
    const initialValues = {
        patientName: "",
        bloodGroup: "",
        unitsRequired: "",
        requiredDate: "",
        hospital: "",
        city: "",
        contactNumber: "",
        reason: "",
    };

    const {
        formData: request,
        handleChange,
        resetForm,
    } = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !request.patientName.trim() ||
            !request.bloodGroup ||
            !request.unitsRequired ||
            !request.requiredDate ||
            !request.hospital.trim() ||
            !request.city.trim() ||
            !request.contactNumber.trim()
        ) {
            showError("Please fill in all required fields.");
            return;
        }
        const units = Number(request.unitsRequired);

        if (!Number.isInteger(units) || units < 1) {
            showError("Units required must be a whole number of at least 1.");
            return;
        }

        console.log("Blood Request:", request);
        showSuccess("Blood request submitted successfully!");
        resetForm();
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">
                                <i className="bi bi-droplet-half text-danger fs-1"></i>
                                <h2 className="fw-bold mt-2">
                                    Patient Blood Request
                                </h2>
                                <p className="text-muted mb-0">
                                    Submit a request for the blood you need
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <FormInput
                                    label="Patient Name"
                                    name="patientName"
                                    value={request.patientName}
                                    onChange={handleChange}
                                    placeholder="Enter patient name"
                                    required
                                />
                                <div className="row">
                                    <BloodGroupDropdown
                                        value={request.bloodGroup}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="col-md-6">
                                        <FormInput
                                            label="Units Required"
                                            name="unitsRequired"
                                            type="number"
                                            value={request.unitsRequired}
                                            onChange={handleChange}
                                            placeholder="Enter required units"
                                            min="1"
                                            step="1"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <FormInput
                                            label="Required Date"
                                            name="requiredDate"
                                            type="date"
                                            value={request.requiredDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput
                                            label="Contact Number"
                                            name="contactNumber"
                                            type="tel"
                                            value={request.contactNumber}
                                            onChange={handleChange}
                                            placeholder="Enter contact number"
                                            required
                                        />
                                    </div>
                                </div>
                                <FormInput
                                    label="Hospital / Medical Center"
                                    name="hospital"
                                    value={request.hospital}
                                    onChange={handleChange}
                                    placeholder="Enter hospital name"
                                    required
                                />
                                <FormInput
                                    label="City"
                                    name="city"
                                    value={request.city}
                                    onChange={handleChange}
                                    placeholder="Enter city"
                                    required
                                />
                                <div className="mb-4">
                                    <label
                                        htmlFor="reason"
                                        className="form-label fw-semibold"
                                    >
                                        Reason / Additional Information
                                    </label>

                                    <textarea
                                        id="reason"
                                        name="reason"
                                        value={request.reason}
                                        onChange={handleChange}
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter reason or additional information"
                                    ></textarea>
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-lg"
                                    >
                                        <i className="bi bi-send me-2"></i>
                                        Submit Blood Request
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientBloodRequest;
