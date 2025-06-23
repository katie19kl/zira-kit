import React from 'react';
import './styles.scss';
import CheckIcon from '../assets/check.svg';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  return (
    <label className={`zk-checkbox ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange(e.target.checked)}
      />
      <span className="checkbox-icon">{checked && <img src={CheckIcon} alt="check" />}</span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};
