import React from 'react';
import { Music } from 'lucide-react';

interface ChordDisplayProps {
  chordName: string;
  notes: string[];
}

const ChordDisplay: React.FC<ChordDisplayProps> = ({ chordName, notes }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <div className="flex items-center gap-2 mb-4">
      <Music className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{chordName}</h2>
    </div>
    <div className="flex flex-wrap gap-2">
      {notes.map((note) => (
        <span
          key={note}
          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm sm:text-base"
        >
          {note}
        </span>
      ))}
    </div>
  </div>
);

export default ChordDisplay;