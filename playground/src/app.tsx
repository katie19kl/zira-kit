import { useState } from 'react';
import { Checkbox } from '@zira-kit/checkbox';
import { Dropdown } from '@zira-kit/dropdown';

export function App() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>@zira-kit UI Components</h1>
      <Checkbox checked={checked} onChange={setChecked} label="Accept Terms" />
      <br /><br />
      <Dropdown
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b' },
        ]}
        onSelect={setSelected}
        placeholder="Choose an option"
      />
      <p>Selected: {selected}</p>
    </div>
  );
}