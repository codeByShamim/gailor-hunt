import React from 'react';
import { ArrowRight, PlayCircle, BookOpen } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      type: 'podcast',
      date: 'November 15, 2024',
      title: 'Reclaiming Power After Betrayal: Finding Healing, Freedom, and Self-Worth with Lora Cheadle',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'bg-[#7886C7]'
    },
    {
      id: 2,
      type: 'podcast',
      date: 'November 15, 2024',
      title: 'Overcoming Divorce Trauma with Dawn Wiggins',
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'bg-[#7886C7]'
    },
    {
      id: 3,
      type: 'podcast',
      date: 'November 15, 2024',
      title: 'The Financial Playbook for Divorce with Victoria Kirilloff',
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'bg-[#7886C7]'
    },
    {
      id: 4,
      type: 'blog',
      date: 'November 13, 2024',
      title: 'Cathy Hunt Inducted into the 2024 NC Women Business Owners Hall of Fame',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'bg-[#A9B5DF]'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-[#FFF2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-extrabold text-[#2D336B] mb-6 tracking-tight">
            Insights & <span className="text-[#7886C7]">Stories</span>
          </h3>
          <p className="text-xl text-[#2D336B] max-w-3xl mx-auto font-medium">
            Explore our latest podcasts, articles, and resources to help navigate life's challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 ${resource.categoryColor} text-white px-4 py-1 rounded-full text-sm font-bold flex items-center`}>
                  {resource.type === 'podcast' ? (
                    <PlayCircle className="w-4 h-4 mr-2" />
                  ) : (
                    <BookOpen className="w-4 h-4 mr-2" />
                  )}
                  {resource.type}
                </div>

                {/* Date */}
                <div className="absolute bottom-4 left-4 bg-white/90 text-[#2D336B] px-3 py-1 rounded-full text-sm font-medium">
                  {resource.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#2D336B] mb-4 group-hover:text-[#7886C7] transition-colors">
                  {resource.title}
                </h4>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#2D336B] font-semibold group-hover:text-[#7886C7] transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center border border-[#2D336B] text-[#2D336B] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2D336B] hover:text-white transition-colors"
          >
            View All Resources
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;