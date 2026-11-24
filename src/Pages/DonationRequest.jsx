import useForm from "../hooks/useForm";
import { showSuccess, showError } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function DonationRequest() {
    const initialValues = {
        patientName: "",
        bloodGroup: "",
        unitsRequired: "",
        hospital: "",
        city: "",
        requiredDate: "",
        contactNumber: "",
        reason: "",
    };

    const {
        formData: request,
        handleChange,
        resetForm,
    } = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            !request.patientName.trim() ||
            !request.bloodGroup ||
            !request.unitsRequired ||
            !request.hospital.trim() ||
            !request.city.trim() ||
            !request.requiredDate ||
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
        console.log("Donation Request:", request);
        showSuccess("Donation request submitted successfully!");
        resetForm();
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4 p-md-5">
                            <div className="text-center mb-4">
                                <div
                                    className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        fontSize: "28px",
                                    }}>
                                    <i className="bi bi-droplet-fill"></i>
                                </div>

                                <h2 className="fw-bold mb-2">
                                    Donation Request
                                </h2>
                                <p className="text-muted mb-0">
                                    Submit a request for blood donation
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormInput
                                            label="Patient Name"
                                            name="patientName"
                                            value={request.patientName}
                                            onChange={handleChange}
                                            placeholder="Enter patient name"
                                            required/>
                                    </div>
                                    <BloodGroupDropdown
                                        value={request.bloodGroup}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="row">
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
                                            required/>
                                    </div>

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
                                </div>
                                <FormInput
                                    label="Hospital / Medical Center"
                                    name="hospital"
                                    value={request.hospital}
                                    onChange={handleChange}
                                    placeholder="Enter hospital name"
                                    required/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormInput
                                            label="City"
                                            name="city"
                                            value={request.city}
                                            onChange={handleChange}
                                            placeholder="Enter city"
                                            required/>
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            label="Contact Number"
                                            name="contactNumber"
                                            type="tel"
                                            value={request.contactNumber}
                                            onChange={handleChange}
                                            placeholder="Enter contact number"
                                            required/>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="reason"
                                        className="form-label fw-semibold">
                                        Reason / Additional Information
                                    </label>

                                    <textarea
                                        id="reason"
                                        name="reason"
                                        className="form-control"
                                        rows="4"
                                        value={request.reason}
                                        onChange={handleChange}
                                        placeholder="Enter reason or additional information"
                                    ></textarea>
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-danger">
                                        <i className="bi bi-send-fill me-2"></i>
                                        Submit Donation Request
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

export default DonationRequest;
