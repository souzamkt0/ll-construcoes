import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';

export default function PropertyGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  // Using Pexels stock photos for demonstration
  const images = [
    {
      url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Fachada Principal',
      description: 'Vista frontal do empreendimento'
    },
    {
      url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Área Interna',
      description: 'Sala de estar integrada'
    },
    {
      url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Cozinha',
      description: 'Cozinha moderna e funcional'
    },
    {
      url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Quarto Principal',
      description: 'Suíte master com closet'
    },
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Área Externa',
      description: 'Quintal com área gourmet'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Main Image */}
      <div className="relative h-96 lg:h-[500px] bg-gray-900">
        <img
          src={images[currentImage].url}
          alt={images[currentImage].title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Info */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{images[currentImage].title}</h3>
          <p className="text-white/90">{images[currentImage].description}</p>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>

        {/* Play Button for Virtual Tour */}
        <div className="absolute top-6 right-6">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Tour Virtual</span>
          </button>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="p-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                currentImage === index
                  ? 'ring-4 ring-emerald-500 shadow-lg'
                  : 'hover:ring-2 hover:ring-emerald-300'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-20 h-16 object-cover"
              />
              {currentImage !== index && (
                <div className="absolute inset-0 bg-black/20" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">{images.length} fotos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Tour virtual disponível</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Última atualização: Janeiro 2024
          </div>
        </div>
      </div>
    </div>
  );
}


