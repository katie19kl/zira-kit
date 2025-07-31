import React from 'react';
import './styles.scss';
import CheckIcon from '../assets/check.svg';
import { clsx } from '@zira-kit/common';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
  className,
}) => {
  return (
    <label className={`zk-checkbox ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className={clsx(
          className,
          'zk-checkbox'
        )} /* remove later, just for checkup*/
      />
      <span className="checkbox-icon">
        {checked && <img src={CheckIcon} alt="check" />}
      </span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};
