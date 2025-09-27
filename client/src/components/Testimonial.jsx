import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {

    const testimonials = [
        {
            name: "Aarav Sharma",
            location: "Mumbai, India",
            image: assets.testimonial_image_2,
            review: "Booking a luxury car was effortless! The platform made it so simple to compare options, and the car was delivered right to my hotel on time. Will definitely rent again on my next trip!",
        },
        {
            name: "Riya Patel",
            location: "Ahmedabad, India",
            image: assets.testimonial_image_1,
            review: "The process was smooth and transparent. I rented a BMW for a weekend getaway, and everything from insurance to payments was handled seamlessly. Highly reliable service!",
        },
        {
            name: "Kabir Nair",
            location: "Bangalore, India",
            image: assets.testimonial_image_2,
            review: "I was amazed by the car selection and how quickly I could book. The support team was responsive and ensured my Mercedes rental was in perfect condition. Outstanding experience!",
        },
    ]



    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title
                title="What Our Customers Say"
                subTitle="Hear from renters and car owners who trust our platform for premium car rentals worldwide."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img src={assets.star_icon} key={index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
