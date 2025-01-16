import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-6">For any inquiries, please reach out to us through our social media channels:</p>
                <ul className="space-y-2">
                    <li>
                    <Link href="https://www.twitter.com/your-twitter-page" className="text-blue-500 hover:underline">Twitter</Link>
                    </li>
                    <li>
                        <Link href="https://www.twitter.com/your-twitter-page" className="text-blue-500 hover:underline">Twitter</Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/your-instagram-page" className="text-blue-500 hover:underline">Instagram</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;