
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
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-purple-500/5 curved-section"></div>
      
      {/* Background Elements */}
      <div className="shape circle bg-purple-500/10 w-96 h-96 bottom-20 right-20 blur-3xl"></div>
      <div className="shape circle bg-indigo-500/10 w-96 h-96 top-20 left-20 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6 gradient-text">
            Loved by Our Community
          </h2>
          <p className="body-lg text-muted-foreground">
            Don't just take our word for it. Hear what our users have to say about their Connectify experience.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="neo-card p-8 md:min-w-[350px] w-full md:w-1/3 flex flex-col h-full transition-all duration-500 snap-start hover:translate-y-[-8px]"
            >
              {/* Quote mark */}
              <div className="text-5xl font-serif text-primary/20 leading-none mb-4">"</div>
              
              <div className="flex-1">
                <p className="body-md mb-8 text-muted-foreground">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div 
                  className="w-14 h-14 rounded-full bg-cover bg-center gradient-border"
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
