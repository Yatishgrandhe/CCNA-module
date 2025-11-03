'use client';

import React from 'react';
import { Question, MatchingItem } from '@/types';
import { shuffleArray } from '@/lib/gameLogic';

interface MatchingQuestionProps {
  question: Question;
  selectedMatches: { leftId: string; rightId: string }[];
  isAnswered: boolean;
  showFeedback: boolean;
  isCooldown: boolean;
  onMatchSelect: (leftId: string, rightId: string) => void;
  onMatchRemove: (leftId: string) => void;
}

export default function MatchingQuestion({
  question,
  selectedMatches,
  isAnswered,
  showFeedback,
  isCooldown,
  onMatchSelect,
  onMatchRemove
}: MatchingQuestionProps) {
  if (!question.leftItems || !question.rightItems || !question.matchingPairs) {
    return <div className="text-gimkit-error">Invalid matching question format</div>;
  }

  const [selectedLeftId, setSelectedLeftId] = React.useState<string | null>(null);
  const leftItems = question.leftItems;
  // Shuffle right items but maintain order for consistent display
  const rightItems = React.useMemo(() => shuffleArray([...question.rightItems!]), [question.rightItems]);

  const handleLeftItemClick = (leftId: string) => {
    if (isAnswered || isCooldown) return;
    
    // If this left item is already matched, remove the match
    const existingMatch = selectedMatches.find(m => m.leftId === leftId);
    if (existingMatch) {
      onMatchRemove(leftId);
      return;
    }

    // If another left item is selected, deselect it
    if (selectedLeftId === leftId) {
      setSelectedLeftId(null);
    } else {
      setSelectedLeftId(leftId);
    }
  };

  const handleRightItemClick = (rightId: string) => {
    if (isAnswered || isCooldown || !selectedLeftId) return;

    // Check if this right item is already matched to another left item
    const existingMatch = selectedMatches.find(m => m.rightId === rightId);
    if (existingMatch) {
      // Remove the existing match
      onMatchRemove(existingMatch.leftId);
    }

    // Create the new match
    onMatchSelect(selectedLeftId, rightId);
    setSelectedLeftId(null);
  };

  const getLeftItemStatus = (leftId: string) => {
    const match = selectedMatches.find(m => m.leftId === leftId);
    if (!match) return null;
    
    if (showFeedback && question.matchingPairs) {
      const correctPair = question.matchingPairs.find(
        p => p.leftId === leftId && p.rightId === match.rightId
      );
      return correctPair ? 'correct' : 'incorrect';
    }
    return 'matched';
  };

  const getRightItemStatus = (rightId: string) => {
    const match = selectedMatches.find(m => m.rightId === rightId);
    if (!match) return null;
    
    if (showFeedback && question.matchingPairs) {
      const correctPair = question.matchingPairs.find(
        p => p.leftId === match.leftId && p.rightId === rightId
      );
      return correctPair ? 'correct' : 'incorrect';
    }
    return 'matched';
  };

  const getLeftItemClasses = (leftId: string) => {
    let classes = 'matching-item matching-left-item ';
    
    if (isCooldown || isAnswered) {
      classes += 'opacity-50 cursor-not-allowed ';
    } else {
      classes += 'cursor-pointer hover:bg-gimkit-hover ';
    }

    if (selectedLeftId === leftId) {
      classes += 'selected-left ';
    }

    const status = getLeftItemStatus(leftId);
    if (status === 'correct') {
      classes += 'matched-correct ';
    } else if (status === 'incorrect') {
      classes += 'matched-incorrect ';
    } else if (status === 'matched') {
      classes += 'matched ';
    }

    return classes;
  };

  const getRightItemClasses = (rightId: string) => {
    let classes = 'matching-item matching-right-item ';
    
    if (isCooldown || isAnswered || !selectedLeftId) {
      classes += 'opacity-50 cursor-not-allowed ';
    } else {
      classes += 'cursor-pointer hover:bg-gimkit-hover ';
    }

    const status = getRightItemStatus(rightId);
    if (status === 'correct') {
      classes += 'matched-correct ';
    } else if (status === 'incorrect') {
      classes += 'matched-incorrect ';
    } else if (status === 'matched') {
      classes += 'matched ';
    }

    return classes;
  };

  const getConnectedRightId = (leftId: string) => {
    const match = selectedMatches.find(m => m.leftId === leftId);
    return match?.rightId || null;
  };

  return (
    <div className="matching-question-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column */}
        <div className="matching-column">
          <h3 className="text-lg font-semibold text-gimkit-text-dark mb-4 text-center">
            Items
          </h3>
          <div className="space-y-3">
            {leftItems.map((item, index) => {
              const connectedRightId = getConnectedRightId(item.id);
              return (
                <div key={item.id} className="relative">
                  <button
                    className={getLeftItemClasses(item.id)}
                    onClick={() => handleLeftItemClick(item.id)}
                    disabled={isCooldown || isAnswered}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">{item.text}</span>
                      <div className="flex items-center space-x-2">
                        {connectedRightId && (
                          <div className="text-sm text-gimkit-primary font-semibold">
                            →
                          </div>
                        )}
                        {getLeftItemStatus(item.id) === 'correct' && (
                          <div className="w-5 h-5 bg-gimkit-accent rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        {getLeftItemStatus(item.id) === 'incorrect' && (
                          <div className="w-5 h-5 bg-gimkit-error rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="matching-column">
          <h3 className="text-lg font-semibold text-gimkit-text-dark mb-4 text-center">
            Matches
          </h3>
          <div className="space-y-3">
            {rightItems.map((item) => {
              const connectedLeftId = selectedMatches.find(m => m.rightId === item.id)?.leftId || null;
              return (
                <div key={item.id} className="relative">
                  <button
                    className={getRightItemClasses(item.id)}
                    onClick={() => handleRightItemClick(item.id)}
                    disabled={isCooldown || isAnswered || !selectedLeftId}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        {connectedLeftId && (
                          <div className="text-sm text-gimkit-primary font-semibold">
                            ←
                          </div>
                        )}
                        <span className="font-medium">{item.text}</span>
                      </div>
                      {getRightItemStatus(item.id) === 'correct' && (
                        <div className="w-5 h-5 bg-gimkit-accent rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {getRightItemStatus(item.id) === 'incorrect' && (
                        <div className="w-5 h-5 bg-gimkit-error rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!isAnswered && (
        <div className="mt-6 text-center text-sm text-gimkit-text-muted">
          {selectedLeftId 
            ? 'Click an item on the right to match it with the selected item.'
            : 'Click an item on the left, then click its match on the right.'}
        </div>
      )}
    </div>
  );
}

