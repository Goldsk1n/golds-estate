import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/backend/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            {landlord && (
                <div className="flex flex-col gap-2">
                    <p>
                        Contact{" "}
                        <span className="font-semibold">{landlord.name}</span>{" "}
                        for{" "}
                        <span className="font-semibold">
                            {listing.name.toLowerCase()}
                        </span>
                    </p>
                    <textarea
                        name="message"
                        id="message"
                        rows="2"
                        value={message}
                        onChange={handleChange}
                        placeholder="Enter your message here..."
                        className="w-full border p-3 rounded-lg"
                    ></textarea>
                    <Link
                        to={`mailto:${landlord.email}?subject:Regarding ${listing.name}&body=${message}`}
                        className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
                    >
                        Send Message
                    </Link>
                </div>
            )}
        </>
    );
}

Contact.propTypes = {
    listing: PropTypes.object,
};
