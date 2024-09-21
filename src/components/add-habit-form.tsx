import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addHabit } from '../store/habit-slice';

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim()) {
      dispatch(addHabit({ name, frequency }));
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label='Habit Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter habit name'
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Frequency</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={frequency}
            label='Frequency'
            onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
          >
            {[
              { name: 'daily', label: 'Daily' },
              { name: 'weekly', label: 'Weekly' },
            ].map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type='submit' variant='contained' color='primary'>
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
