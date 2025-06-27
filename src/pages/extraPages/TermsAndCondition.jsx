import React from 'react';
import { Link, useNavigation } from 'react-router';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import MouseTail from '../../components/mouseTail/MouseTail';
import Loading from '../../components/loading/Loading';

const TermsAndCondition = () => {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <section className="bg-base-200 py-16 px-6 lg:px-20 relative">
            <DynamicTitle title="Terms & Conditions | Roomie Connect" />
            <MouseTail />

            <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow-xl space-y-8">
                <h2 className="text-3xl font-bold text-center text-primary">Terms & Conditions</h2>
                <p className="text-center text-sm text-base-content">
                    Please read these terms carefully before using Roomie Connect.
                </p>

                <div className="space-y-6 text-base-content text-sm leading-relaxed">
                    <div>
                        <h3 className="text-lg font-semibold text-primary">1. Eligibility</h3>
                        <p>Users must be 18+ and provide accurate details to use our platform.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">2. User Conduct</h3>
                        <ul className="list-disc pl-5">
                            <li>No fake or harmful profiles</li>
                            <li>No spam or unsolicited messages</li>
                            <li>Respect fellow users</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">3. Platform Usage</h3>
                        <p>We reserve the right to suspend users violating terms. Roomie Connect may update services and policies anytime.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">4. Disclaimer</h3>
                        <p>We facilitate matches but do not guarantee compatibility or safety. Always meet responsibly.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary">5. Contact</h3>
                        <p>Questions? Email <a className="link" href="mailto:support@roomieconnect.com">support@roomieconnect.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndCondition;