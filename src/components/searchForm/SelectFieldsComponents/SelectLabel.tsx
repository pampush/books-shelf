import styled from 'styled-components';

interface LabelProps {
  selected: boolean;
  opened: boolean;
}

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 1rem;
  pointer-events: none;
  transform-origin: top left;
  transform: translateY(
    ${(props: LabelProps) => (props.selected || props.opened ? '0' : '3.2rem')}
  );
  transition: all 0.2s ease;
  @media (max-width: 960px) {
    transform: translateY(
      ${(props: LabelProps) => (props.selected || props.opened ? '0' : '3.6rem')}
    );
  }
  @media (max-width: 600px) {
    transform: translateY(
      ${(props: LabelProps) => (props.selected || props.opened ? '0' : '3.8rem')}
    );
  }
`;

export default InputLabel;
