import React from 'react';
import { Link, useNavigation } from 'react-router';
import MouseTail from '../../components/mouseTail/MouseTail';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import Loading from '../../components/loading/Loading';

const PrivacyPolicy = () => {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <section className="bg-base-200 py-16 px-6 lg:px-20 relative">
            <DynamicTitle title="Privacy Policy | Roomie Connect" />
            <MouseTail />

            <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow-xl space-y-8">
                <h2 className="text-3xl font-bold text-center text-primary">Privacy Policy</h2>
                <p className="text-center text-sm text-base-content">
                    Your privacy is important to us. Here's how Roomie Connect handles your data.
                </p>

                <div className="space-y-6 text-base-content text-sm leading-relaxed">
                    <div>
                        <h3 className="text-lg font-semibold text-primary">1. Information We Collect</h3>
                        <p>We collect personal info like name, email, location, and preferences to help match you with compatible roommates.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">2. How We Use Your Info</h3>
                        <p>We use your data to suggest matches, improve our service, and communicate updates. Your info is never sold.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">3. Data Security</h3>
                        <p>We use encryption and access controls to protect your data. Only authorized staff may access sensitive information.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">4. Cookies</h3>
                        <p>Cookies help us enhance user experience and track site usage. You can manage cookie settings in your browser.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">5. Your Rights</h3>
                        <p>You can request data access, updates, or deletion at any time by contacting support@roomieconnect.com.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;