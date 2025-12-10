import { useState } from 'react';
import type { ComponentInfo, Category } from '../types';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ComponentCard from './ComponentCard';

interface GalleryProps {
  components: ComponentInfo[];
}

function Gallery({ components }: GalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  
  const filteredComponents: ComponentInfo[] = components.filter(component => {
  if (selectedCategory === 'All') {
    return true; // Show all items
  }
  return component.category === selectedCategory;
});


const finalFiltered = filteredComponents.filter(comp => {
  const query = searchQuery.toLowerCase();
  return (
    comp.name.toLowerCase().includes(query) ||
    comp.description.toLowerCase().includes(query)
  );
});


  return (
    <div className="gallery">
      <div className="gallery-controls">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="gallery-results">
        {/* TODO: Display result count */}
        <p className="result-count">Showing {finalFiltered.length} components</p>
      </div>

      <div className="gallery-grid">
        {/* TODO: Map and display filtered components */}
        {finalFiltered.map(comp => (
          <ComponentCard key={comp.id} info={comp} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;