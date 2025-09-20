// service_mj1kfdb
// template_b968s2f
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("Success");
    const [alertMessage, setAlertMessage] = useState("");
    
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        
        // Auto-hide alert after 5 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            console.log("Form Submitted:", formData);
            
            await emailjs.send(
                "service_mj1kfdb",
                "template_b968s2f",
                {
                    from_name: formData.name,
                    to_name: "Vaibhav",
                    from_email: formData.email,
                    to_email: "asdfghbvqqqq@gmail.com",
                    message: formData.message
                },
                "_CJCy6j2YRr1vJCy3"
            );
            
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "Your Message Has Been Sent.");
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", "Your Message Hasn't Been Sent, Something went wrong.");
        }
    };
    
    return (
        <section className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-black">
                <div className="flex flex-col items-center w-full gap-5 mb-10">
                    <h2 className="text-heading">Contact Me</h2>
                    <p className="font-normal text-neutral-400">
                        Whether you're looking to Contact Me, I'm Here and Aware
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Full Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.name}
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.email}
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="JohnDoe@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Message
                        </label>
                        <textarea
                            onChange={handleChange}
                            value={formData.message}
                            rows="5"
                            id="message"
                            name="message"
                            className="field-input field-input-focus"
                            placeholder="Share your Message..."
                            autoComplete="off"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-violet-700 to-violet-500 hover-animation"
                        disabled={isLoading}
                    >
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;