import { useState } from 'react';
import Piano from './components/Piano';
import ChordDisplay from './components/ChordDisplay';
import { BookOpen } from 'lucide-react';

type TheoryType = {
  [key: string]: {
    [key: string]: string[];
  };
};

const THEORY: TheoryType = {
  'Major Chords': {
    'C Major': ['C', 'E', 'G'],
    'G Major': ['G', 'B', 'D'],
    'D Major': ['D', 'F#', 'A'],
    'A Major': ['A', 'C#', 'E'],
    'E Major': ['E', 'G#', 'B'],
    'F Major': ['F', 'A', 'C'],
    'B Major': ['B', 'D#', 'F#'],
  },
  'Minor Chords': {
    'A Minor': ['A', 'C', 'E'],
    'E Minor': ['E', 'G', 'B'],
    'D Minor': ['D', 'F', 'A'],
    'G Minor': ['G', 'A#', 'D'],
    'C Minor': ['C', 'D#', 'G'],
    'F Minor': ['F', 'G#', 'C'],
    'B Minor': ['B', 'D', 'F#'],
  },
  'Major Scales': {
    'C Major Scale': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G Major Scale': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D Major Scale': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A Major Scale': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E Major Scale': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B Major Scale': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F Major Scale': ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
    'F# Major Scale': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
    'C# Major Scale': ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
    'A♭ Major Scale': ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
    'E♭ Major Scale': ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
    'B♭ Major Scale': ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
  },
  'Minor Scales': {
    'A Minor Scale': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'E Minor Scale': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    'B Minor Scale': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    'F# Minor Scale': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
    'C# Minor Scale': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    'G# Minor Scale': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
    'D# Minor Scale': ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#'],
    'D Minor Scale': ['D', 'E', 'F', 'G', 'A', 'A#', 'C'],
    'G Minor Scale': ['G', 'A', 'A#', 'C', 'D', 'D#', 'F'],
    'C Minor Scale': ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#'],
    'F Minor Scale': ['F', 'G', 'G#', 'A#', 'C', 'C#', 'D#'],
    'B♭ Minor Scale': ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#'],
  }
};

function App() {
  const [activeTab, setActiveTab] = useState<'chords' | 'scales'>('chords');
  const [selectedCategory, setSelectedCategory] = useState<string>('Major Chords');
  const [selectedItem, setSelectedItem] = useState<string>('C Major');

  const categories = Object.keys(THEORY).filter(category =>
    activeTab === 'chords' ? category.includes('Chord') : category.includes('Scale')
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Piano Theory Learner</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid gap-6 sm:gap-8">
          <div>
            Made with <a href="https://bolt.new/">bolt</a>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px" aria-label="Tabs">
                <button
                  onClick={() => {
                    setActiveTab('chords');
                    setSelectedCategory('Major Chords');
                    setSelectedItem('C Major');
                  }}
                  className={`
                    w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base
                    ${activeTab === 'chords'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  Chords
                </button>
                <button
                  onClick={() => {
                    setActiveTab('scales');
                    setSelectedCategory('Major Scales');
                    setSelectedItem('C Major Scale');
                  }}
                  className={`
                    w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base
                    ${activeTab === 'scales'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  Scales
                </button>
              </nav>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedItem(Object.keys(THEORY[category as keyof typeof THEORY])[0]);
                    }}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors
                      ${selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category.replace(' Chords', '').replace(' Scales', '')}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {Object.keys(THEORY[selectedCategory as keyof typeof THEORY]).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedItem(name)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm
                      ${selectedItem === name
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {name.replace(' Scale', '')}
                  </button>
                ))}
                notes={THEORY[selectedCategory][selectedItem]}
              </div>
            </div>

            <ChordDisplay
              chordName={selectedItem}
              notes={THEORY[selectedCategory as keyof typeof THEORY][selectedItem]}
            />

            <Piano
              highlightedNotes={THEORY[selectedCategory as keyof typeof THEORY][selectedItem]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;