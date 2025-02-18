import styled from "styled-components"


interface Props {
  bIsComplete: boolean;
  text: string;
  name: string;
  dataTestId?: string;
}

interface RequisiteCheckboxProps {
  $bIsComplete: boolean;
}

interface RequisiteTextProps {
  $bIsComplete: boolean;
}

const FieldRequisiteContainer = styled.li`
  display: flex;
  gap: .6rem;
`

const RequisiteCheckbox = styled.input<RequisiteCheckboxProps>`
  border-color: black;
  background-color: white;
  background-image: ${props => props.$bIsComplete ? props.theme.fieldRequisiteCheckboxOn?.backgroundImage : props.theme.fieldRequisiteCheckboxOff?.backgroundImage};
  height: 1rem;
  width: 1rem;
  opacity: ${props => props.$bIsComplete ? props.theme.fieldRequisiteCheckboxOn?.opacity : props.theme.fieldRequisiteCheckboxOff?.opacity};
  flex-shrink: 0;
  appearance: none;
  border-radius: .5rem;
  border-width: 1px;
  border: 1px solid;
`

const RequisiteText = styled.small<RequisiteTextProps>`
  color: ${props => props.$bIsComplete ? props.theme.fieldRequisiteTextOn?.color : props.theme.fieldRequisiteTextOff?.color };
`

export const FieldRequisite = ({ bIsComplete, text, name, dataTestId }: Props) => {
  
  return (
    <FieldRequisiteContainer data-testid={dataTestId}>
      <RequisiteCheckbox name={name} $bIsComplete={bIsComplete} disabled type="checkbox" tabIndex={-1} />
      <RequisiteText $bIsComplete={bIsComplete}>{text}</RequisiteText>
    </FieldRequisiteContainer>
  )
} 
