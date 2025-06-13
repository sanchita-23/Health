import React, { useState } from 'react';

const HelpSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        issue: '',
    });

    const [faqOpenIndex, setFaqOpenIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Support request submitted. We'll get back to you shortly!");
        // Optionally send this data to a backend
    };

    const toggleFaq = (index) => {
        setFaqOpenIndex(faqOpenIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I update my hourly rate?",
            answer: "Go to your dashboard and click the 'Update Rate' button under Hourly Rate card."
        },
        {
            question: "Can I contact patients directly?",
            answer: "Yes, once assigned. Use the chat or video call options provided in your dashboard."
        },
        {
            question: "How do I upload patient reports?",
            answer: "Use the 'Upload Observations' card in your dashboard to attach files."
        }
    ];

    const styles = {
        page: {
            padding: '40px',
            fontFamily: "'Nunito', sans-serif",
            background: 'linear-gradient(to right, #e0fdfd, #fefefe)',
        },
        section: {
            marginBottom: '40px',
        },
        title: {
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '15px',
            color: '#00897b',
        },
        faqItem: {
            background: '#fff',
            padding: '15px 20px',
            borderRadius: '10px',
            marginBottom: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            cursor: 'pointer',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            background: '#fff',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
        },
        input: {
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '1rem',
        },
        button: {
            padding: '12px',
            backgroundColor: '#009688',
            color: '#fff',
            fontWeight: '600',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
        }
    };

    return (
        <div style={styles.page}>
            {/* FAQ Section */}
            <div style={styles.section}>
                <h2 style={styles.title}>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        style={styles.faqItem}
                        onClick={() => toggleFaq(index)}
                    >
                        <strong>{faq.question}</strong>
                        {faqOpenIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div style={styles.section}>
                <h2 style={styles.title}>Contact Support</h2>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{ ...styles.input, height: '100px' }}
                        required
                    />
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>

            {/* Report Issue */}
            <div style={styles.section}>
                <h2 style={styles.title}>Report an Issue</h2>
                <textarea
                    name="issue"
                    placeholder="Describe the issue you're facing..."
                    value={formData.issue}
                    onChange={handleInputChange}
                    style={{ ...styles.input, height: '100px', backgroundColor: '#fff' }}
                />
                <button style={styles.button} onClick={() => alert("Issue reported!")}>
                    Report Issue
                </button>
            </div>

            {/* Live Chat Placeholder */}
            <div style={styles.section}>
                <h2 style={styles.title}>Live Chat</h2>
                <p>Live chat support is currently <strong>unavailable</strong>. Please use the contact form above.</p>
            </div>
        </div>
    );
};

export default HelpSupport;
