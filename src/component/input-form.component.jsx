import { FormInputLabel, Group, Input } from './input-form.styles';

const InputForm = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(otherProps.value && otherProps.value.length)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default InputForm;
