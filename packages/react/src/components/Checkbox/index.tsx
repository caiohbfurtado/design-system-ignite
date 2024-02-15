import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxContainer {...rest}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
