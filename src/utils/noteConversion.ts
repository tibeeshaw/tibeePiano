export const standardToFrench: { [key: string]: string } = {
  'C': 'Do',
  'D': 'Ré',
  'E': 'Mi',
  'F': 'Fa',
  'G': 'Sol',
  'A': 'La',
  'B': 'Si',
  'C#': 'Do#',
  'D#': 'Ré#',
  'F#': 'Fa#',
  'G#': 'Sol#',
  'A#': 'La#',
  'B#': 'Si#',
  'C♭': 'Do♭',
  'D♭': 'Ré♭',
  'E♭': 'Mi♭',
  'F♭': 'Fa♭',
  'G♭': 'Sol♭',
  'A♭': 'La♭',
  'B♭': 'Si♭'
};

export const frenchToStandard: { [key: string]: string } = Object.entries(standardToFrench).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

export const convertNotes = (notes: string[], toFrench: boolean): string[] => {
  return notes.map(note => {
    if (toFrench) {
      return standardToFrench[note] || note;
    } else {
      return frenchToStandard[note] || note;
    }
  });
};

export const convertNote = (note: string, toFrench: boolean): string => {
  if (toFrench) {
    return standardToFrench[note] || note;
  } else {
    return frenchToStandard[note] || note;
  }
}; 