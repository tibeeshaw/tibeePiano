import React from 'react';

interface PianoKeyProps {
  note: string;
  isBlack: boolean;
  isHighlighted: boolean;
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, isBlack, isHighlighted }) => (
  <div
    className={`relative h-full ${isBlack ? 'z-10' : ''}`}
    style={{ width: isBlack ? '0' : '28px' }}
  >
    <div
      className={`
        absolute border border-gray-300
        ${isBlack 
          ? 'bg-gray-800 h-20 w-[18px] -mx-[9px]' 
          : 'bg-white h-32 w-[28px]'}
        ${isHighlighted 
          ? (isBlack ? '!bg-indigo-700' : '!bg-indigo-400') 
          : ''}
        rounded-b-md
      `}
      aria-label={`Piano key ${note}`}
    >
      <span className={`
        absolute bottom-1 left-1/2 -translate-x-1/2
        text-[10px] font-semibold
        ${isBlack ? 'text-white' : 'text-gray-700'}
        ${isHighlighted ? 'text-white' : ''}
      `}>
        {note}
      </span>
    </div>
  </div>
);

interface PianoProps {
  highlightedNotes: string[];
}

const Piano: React.FC<PianoProps> = ({ highlightedNotes }) => {
  const notes = [
    { note: 'C', isBlack: false },
    { note: 'C#', isBlack: true },
    { note: 'D', isBlack: false },
    { note: 'D#', isBlack: true },
    { note: 'E', isBlack: false },
    { note: 'F', isBlack: false },
    { note: 'F#', isBlack: true },
    { note: 'G', isBlack: false },
    { note: 'G#', isBlack: true },
    { note: 'A', isBlack: false },
    { note: 'A#', isBlack: true },
    { note: 'B', isBlack: false },
  ];

  return (
    <div className="flex justify-center items-end h-40 bg-gray-100 rounded-lg p-4 shadow-lg overflow-x-auto">
      {notes.map((key) => (
        <PianoKey
          key={key.note}
          note={key.note}
          isBlack={key.isBlack}
          isHighlighted={highlightedNotes.includes(key.note)}
        />
      ))}
    </div>
  );
};

export default Piano;