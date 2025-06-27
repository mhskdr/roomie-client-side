import React from 'react';
import DynamicTitle from '../../../components/dynamicTitle/DynamicTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { useNavigation } from 'react-router';
import Loading from '../../../components/loading/Loading';

const Contact = () => {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <section className="bg-base-200 py-16 px-6 lg:px-20">
            <DynamicTitle title='Fill the Form | Stay connected' />
            <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow-xl space-y-10 my-9">
                <h2 className="text-3xl font-bold text-center text-primary">Contact Our Helping Team</h2>
                <p className="text-center text-base-content text-sm">We're here to help with searching, checking and various services.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ContactInfo></ContactInfo>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default Contact;