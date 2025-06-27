import React from 'react';
import { BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';

const ContactInfo = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <BsTelephone size={24} className="text-primary mt-1" />
                <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-base-content">+880 1644 000688</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <BsEnvelope size={24} className="text-primary mt-1" />
                <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-base-content">support@roomieconnect.com</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <BsGeoAlt size={24} className="text-primary mt-1" />
                <div>
                    <h4 className="font-semibold">Office Location</h4>
                    <p className="text-sm text-base-content">City Road, Rural town, 7400</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;