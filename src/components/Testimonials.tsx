
import React from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    image: "https://picsum.photos/id/1012/200/200",
    quote: "Connectify has completely transformed how I engage with my audience. The smart analytics and community tools are game-changers for creators."
  },
  {
    name: "Samantha Lee",
    role: "Small Business Owner",
    image: "https://picsum.photos/id/1027/200/200",
    quote: "I've tried many social platforms, but none have given me the reach and engagement that Connectify has. It's helped my business grow tremendously."
  },
  {
    name: "Michael Chen",
    role: "Photographer",
    image: "https://picsum.photos/id/1025/200/200",
    quote: "The image quality and engagement on my photography has never been better. Connectify really understands what visual creators need."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-24 bottom-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="absolute -left-24 top-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4 gradient-text">
            Loved by Our Community
          </h2>
          <p className="body-lg text-muted-foreground">
            Don't just take our word for it. Hear what our users have to say about their Connectify experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl flex flex-col h-full hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-1">
                <p className="body-md mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                ></div>
                <div>
                  <p className="font-serif font-semibold">{testimonial.name}</p>
                  <p className="body-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
