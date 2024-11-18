import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Brandon is a visionary. I had the privilege of working with him on our 6-time EMMY Award Winning Taking Action Against Domestic Violence multi-media campaign at Scripps. His creative process when approaching the project is deliberate, collaborative and -when necessary - from a place you didn\'t see coming. By that I mean that Brandon studies the target audience as well as project mission. Both are aligned to produce content that is user intuitive to the audience. They feel "seen", "understood", "respected" and THAT opens the door to connection & learning. Five years after working together on our last project, I am still amazed by Brandon Shirley and the pivotal role his creative genius played in rebranding that entire campaign to reach even more people.',
    author: 'Lissette Campos',
    title: 'Senior Director of Strategic Branding, Marketing + Communication, Tampa Bay Chamber'
  },
  {
    quote: 'Brandon is an extremely rare talent! His creative eye mixed with his business acumen make him an invaluable asset to any organization. He is ego-free and highly empathetic, while also holding teams accountable. It was a pleasure seeing Brandon motivate the team and hit deadlines at all costs without needing to be overbearing. Brandon is a steal for any team!',
    author: 'Sterling Reames',
    title: 'Technical Animator, Striking Distance Studios'
  },
  {
    quote: [
      'Brandon and I worked together for about 7 years and time and time again, he proved to be a go-to asset for many of our business partners.',
      'Reliable, innovative, and consistent are 3 words I\'d use to describe his work ethic and creative concepts.',
      'Was a pleasure working with him and partnering on many large scale campaigns!'
    ],
    author: 'Jon Deshaies',
    title: 'Motion Designer, Bloomin\' Brands Inc.'
  },
  {
    quote: [
      'Brandon\'s artistic eye combined with his technical expertise make him a valuable asset to any client or company. He always has a great attitude and is genuinely excited to take on and tackle new challenges.',
      'Mix in his ability to problem solve and dedication to meeting deadlines, makes him a creative force that\'s highly sought after.'
    ],
    author: 'Nicholas Matlock Alexander',
    title: 'Creative Director'
  },
  {
    quote: [
      'Brandon is an amazingly talented designer with a can-do attitude and drive unlike anyone I\'ve ever known. He is resourceful, dedicated and always willing to lend a hand to his teammates. His creativity and design abilities know no limits, and he\'s someone I would proudly recommend to anyone.',
      'I managed Brandon for two years while I was employed by Scripps and I would gladly work with Brandon again if the opportunity ever presented itself.'
    ],
    author: 'Michael Dixon',
    title: 'Client Engagement Manager, One North'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Calculate max height from all testimonials
    const calculateMaxHeight = () => {
      const heights = testimonialRefs.current
        .filter((ref): ref is HTMLDivElement => ref !== null)
        .map(ref => ref.scrollHeight);
      return Math.max(...heights);
    };

    // Set initial max height
    setMaxHeight(calculateMaxHeight());

    // Recalculate on window resize
    const handleResize = () => {
      setMaxHeight(calculateMaxHeight());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16">
      <h2 className="text-2xl font-light text-black mb-12">What People Say</h2>
      <div className="relative">
        <div 
          style={{ height: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
          className="relative overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => testimonialRefs.current[index] = el}
              className={`absolute top-0 left-0 w-full bg-black/5 p-12 rounded-xl transition-all duration-1000 ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Quote className="w-10 h-10 text-black/10 mb-8" />
              <div className="text-black/70 font-light leading-relaxed space-y-6">
                {Array.isArray(testimonial.quote) ? (
                  testimonial.quote.map((paragraph, i) => (
                    <p key={i} className="text-lg">{paragraph}</p>
                  ))
                ) : (
                  <p className="text-lg">{testimonial.quote}</p>
                )}
              </div>
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="text-black font-medium text-lg">
                  {testimonial.author}
                </div>
                <div className="text-black/50 text-base mt-1">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
