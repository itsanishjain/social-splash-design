
import React from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    quote: "Connectify has completely transformed how I engage with my audience. The tools are intuitive and powerful."
  },
  {
    name: "Samantha Lee",
    role: "Small Business Owner",
    quote: "I've tried many platforms, but none have given me the reach and engagement that Connectify has."
  },
  {
    name: "Michael Chen",
    role: "Photographer",
    quote: "The image quality and engagement on my photography has never been better. Just what I needed."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden bg-secondary/30">
      <div className="shape circle bg-blue-200 w-64 h-64 -bottom-20 -right-20 opacity-30"></div>
      <div className="shape triangle bg-orange-200 w-32 h-32 top-20 right-20 opacity-30"></div>
      
      <div className="container section-container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">
            Loved by our community
          </h2>
          <p className="body-lg">
            Don't just take our word for it. Hear what our users have to say about their experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md"
            >
              <svg className="text-primary h-8 w-8 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
              </svg>
              
              <p className="body-md mb-6">{testimonial.quote}</p>
              
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
