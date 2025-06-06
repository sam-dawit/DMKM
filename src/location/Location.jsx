import React from "react";

const Location = () => {
    return (
        <div className="w-full">
            <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.835081087582!2d-122.26248392365359!3d47.51084687118114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042649feff761%3A0x899b0d6bcc5dcbcd!2s10056%20Renton%20Ave%20S%2C%20Seattle%2C%20WA%2098178!5e1!3m2!1sam!2sus!4v1749085570008!5m2!1sam!2sus"
                    title="Church Location"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <p className="mt-4 text-gray-600 text-center">
                10056 Renton Ave S, Seattle, WA 98178
            </p>
        </div>
    );
};

export default Location;
