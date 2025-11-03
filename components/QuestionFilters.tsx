'use client';

import { useState } from 'react';

export interface QuestionFilters {
  single: boolean;
  multiple: boolean;
  matching: boolean;
}

interface QuestionFiltersProps {
  onStart: (filters: QuestionFilters) => void;
  totalQuestions: number;
  questionCounts: {
    single: number;
    multiple: number;
    matching: number;
  };
}

export default function QuestionFilters({ onStart, totalQuestions, questionCounts }: QuestionFiltersProps) {
  const [filters, setFilters] = useState<QuestionFilters>({
    single: true,
    multiple: true,
    matching: true
  });

  const handleToggle = (type: keyof QuestionFilters) => {
    setFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const selectedCount = 
    (filters.single ? questionCounts.single : 0) +
    (filters.multiple ? questionCounts.multiple : 0) +
    (filters.matching ? questionCounts.matching : 0);

  const allUnselected = !filters.single && !filters.multiple && !filters.matching;

  return (
    <div className="filter-container">
      <div className="filter-card">
        <h2 className="filter-title">🎯 Select Question Types</h2>
        <p className="filter-description">
          Choose which types of questions you want to practice. You can select multiple types.
        </p>

        <div className="filter-options">
          <div className="filter-option">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.single}
                onChange={() => handleToggle('single')}
                className="filter-input"
              />
              <div className="filter-label-content">
                <span className="filter-label-text">Single Choice</span>
                <span className="filter-count">({questionCounts.single} questions)</span>
              </div>
            </label>
            <p className="filter-hint">Choose one correct answer</p>
          </div>

          <div className="filter-option">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.multiple}
                onChange={() => handleToggle('multiple')}
                className="filter-input"
              />
              <div className="filter-label-content">
                <span className="filter-label-text">Multiple Choice</span>
                <span className="filter-count">({questionCounts.multiple} questions)</span>
              </div>
            </label>
            <p className="filter-hint">Select multiple correct answers</p>
          </div>

          <div className="filter-option">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.matching}
                onChange={() => handleToggle('matching')}
                className="filter-input"
              />
              <div className="filter-label-content">
                <span className="filter-label-text">Matching</span>
                <span className="filter-count">({questionCounts.matching} questions)</span>
              </div>
            </label>
            <p className="filter-hint">Match items from two columns</p>
          </div>
        </div>

        <div className="filter-summary">
          <p className="filter-total">
            <strong>{selectedCount}</strong> of <strong>{totalQuestions}</strong> questions selected
          </p>
        </div>

        <button
          onClick={() => onStart(filters)}
          disabled={allUnselected}
          className={`filter-start-btn ${allUnselected ? 'disabled' : ''}`}
        >
          {allUnselected ? 'Please select at least one question type' : 'Start Quiz'}
        </button>
      </div>
    </div>
  );
}

