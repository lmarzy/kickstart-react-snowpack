import React, { FC } from 'react';

import { Input } from './input/input';
import { Label } from './label';
import { Select } from './select/select';
import { Textarea } from './textarea/textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
}

export const Field: FC & FieldComposition = ({ children }) => {
  return <div>{children}</div>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
Field.Select = Select;
