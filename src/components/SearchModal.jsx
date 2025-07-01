
import React, { useEffect, useRef } from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { Search, X, ShoppingBag, Folder, FileText, Settings, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = () => {
  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    isSearching,
    setSearchQuery,
    performSearch,
    closeSearch
  } = useSearch();
  
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery, performSearch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, closeSearch]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'product':
        return <ShoppingBag className="w-4 h-4 text-orange-400" />;
      case 'category':
        return <Folder className="w-4 h-4 text-blue-400" />;
      case 'page':
        return <FileText className="w-4 h-4 text-green-400" />;
      case 'service':
        return <Settings className="w-4 h-4 text-purple-400" />;
      default:
        return <Search className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'product':
        return 'bg-orange-500/20 text-orange-300';
      case 'category':
        return 'bg-blue-500/20 text-blue-300';
      case 'page':
        return 'bg-green-500/20 text-green-300';
      case 'service':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeSearch}
      />
      
      {/* Search Modal */}
      <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center p-6 border-b border-white/10">
          <Search className="w-6 h-6 text-orange-400 mr-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-lg placeholder-gray-400 outline-none"
          />
          <button
            onClick={closeSearch}
            className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 text-orange-400 animate-spin mr-3" />
              <span className="text-gray-300">Searching...</span>
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 text-sm mt-1">Try searching for products, categories, or services</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-4">
              <p className="text-gray-400 text-sm mb-4">{searchResults.length} results found</p>
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    onClick={closeSearch}
                    className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 mr-4">
                      {result.image ? (
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          {getTypeIcon(result.type)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium group-hover:text-orange-300 transition-colors truncate">
                          {result.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm truncate">{result.description}</p>
                      {result.price && (
                        <p className="text-orange-400 font-medium text-sm mt-1">{result.price}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-white text-lg font-medium mb-2">Search Olympia Shopping</h3>
              <p className="text-gray-400">Find products, categories, services and more</p>
              
              {/* Quick Suggestions */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSearchQuery('electronics')}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors"
                >
                  <div className="text-white font-medium text-sm">Electronics</div>
                  <div className="text-gray-400 text-xs">Phones, laptops, gadgets</div>
                </button>
                <button
                  onClick={() => setSearchQuery('fashion')}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors"
                >
                  <div className="text-white font-medium text-sm">Fashion</div>
                  <div className="text-gray-400 text-xs">Clothing, shoes, accessories</div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Press ESC to close</span>
            <span>↑↓ to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
