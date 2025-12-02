// components/CategoryCard.tsx
import React from 'react';
import Card from './Card';

interface SubService {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface CategoryCardProps {
  categoryName: string;
  description?: string;
  mainImageUrl: string;
  subServices: SubService[];
  className?: string;
  onClick?: () => void;
}

function CategoryCard({
  categoryName,
  description,
  mainImageUrl,
  subServices,
  className = '',
  onClick
}: CategoryCardProps) {
  return (
    <Card 
      className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
      hover
      padding="none"
    >
      {/* Category Header with Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={mainImageUrl} 
          alt={categoryName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{categoryName}</h3>
          {description && (
            <p className="text-white/90 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Subservices List */}
      <div className="p-5 bg-white">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Available Services
        </h4>
        <div className="space-y-3">
          {subServices.slice(0, 3).map((subService) => (
            <div key={subService.id} className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded transition-colors">
              {subService.icon && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600">{subService.icon}</span>
                </div>
              )}
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {subService.title}
                </h5>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {subService.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Show more indicator if there are more than 3 subservices */}
          {subServices.length > 3 && (
            <div className="pt-2 border-t border-gray-100">
              <p className="text-sm text-primary-600 font-medium text-center">
                +{subServices.length - 3} more services
              </p>
            </div>
          )}
        </div>
        
        {/* View All Button */}
        <button 
          className="w-full mt-4 py-2 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg font-medium transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          View All Services
        </button>
      </div>
    </Card>
  );
}

export default CategoryCard;