
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Trophy, Timer } from 'lucide-react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameStarted && !gameWon) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameWon]);

  // Initialize game
  const initializeGame = async () => {
    setLoading(true);
    setGameWon(false);
    setMoves(0);
    setTimeElapsed(0);
    setGameStarted(false);
    setFlippedCards([]);
    setMatchedCards([]);

    try {
      // Fetch random images from Picsum Photos API
      const imagePromises = [];
      const imageIds = [];
      
      // Generate 8 unique random image IDs
      for (let i = 0; i < 8; i++) {
        const randomId = Math.floor(Math.random() * 1000) + 1;
        imageIds.push(randomId);
        imagePromises.push(
          fetch(`https://picsum.photos/200/200?random=${randomId}`)
            .then(response => response.url)
        );
      }

      const imageUrls = await Promise.all(imagePromises);
      
      // Create pairs of cards
      const gameCards = [];
      imageUrls.forEach((url, index) => {
        gameCards.push(
          { id: index * 2, imageUrl: url, matched: false },
          { id: index * 2 + 1, imageUrl: url, matched: false }
        );
      });

      // Shuffle the cards
      const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
    } catch (error) {
      console.error('Error fetching images:', error);
      // Fallback to color-based cards if API fails
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
      const gameCards = [];
      colors.forEach((color, index) => {
        gameCards.push(
          { id: index * 2, color, matched: false },
          { id: index * 2 + 1, color, matched: false }
        );
      });
      const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
    }
    
    setLoading(false);
  };

  // Handle card click
  const handleCardClick = (cardId) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (matchedCards.includes(cardId)) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstCard, secondCard] = newFlippedCards.map(id => 
        cards.find(card => card.id === id)
      );

      const isMatch = firstCard.imageUrl 
        ? firstCard.imageUrl === secondCard.imageUrl
        : firstCard.color === secondCard.color;

      if (isMatch) {
        setMatchedCards(prev => [...prev, ...newFlippedCards]);
        setFlippedCards([]);
        
        // Check if game is won
        if (matchedCards.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading your memory game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Memory Puzzle Game</h1>
          <div className="flex justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              <span className="text-lg font-semibold">{formatTime(timeElapsed)}</span>
            </div>
            <div className="text-lg font-semibold">Moves: {moves}</div>
            <Button 
              onClick={initializeGame}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Game
            </Button>
          </div>
        </div>

        {/* Game Won Modal */}
        {gameWon && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="p-8 text-center bg-white">
              <CardContent>
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  You won in {moves} moves and {formatTime(timeElapsed)}!
                </p>
                <Button onClick={initializeGame} className="mt-4">
                  Play Again
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Game Board */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105
                ${flippedCards.includes(card.id) || matchedCards.includes(card.id) 
                  ? 'rotate-y-180' : ''
                }
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Back */}
              <div 
                className={`
                  absolute inset-0 rounded-lg shadow-lg flex items-center justify-center
                  bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold
                  ${flippedCards.includes(card.id) || matchedCards.includes(card.id) 
                    ? 'opacity-0' : 'opacity-100'
                  }
                  transition-opacity duration-300
                `}
              >
                ?
              </div>
              
              {/* Card Front */}
              <div 
                className={`
                  absolute inset-0 rounded-lg shadow-lg overflow-hidden
                  ${flippedCards.includes(card.id) || matchedCards.includes(card.id) 
                    ? 'opacity-100' : 'opacity-0'
                  }
                  transition-opacity duration-300
                  ${matchedCards.includes(card.id) ? 'ring-4 ring-green-400' : ''}
                `}
              >
                {card.imageUrl ? (
                  <img 
                    src={card.imageUrl} 
                    alt="Memory card"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full"
                    style={{ backgroundColor: card.color }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-white/80">
          <p className="text-lg">
            Click cards to flip them and find matching pairs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
