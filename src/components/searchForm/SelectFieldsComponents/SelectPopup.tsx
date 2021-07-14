import React from 'react';
import styled from 'styled-components';

const SelectPopup = styled(SPopup)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem 0 rgb(118, 118, 118);
  display: 'flex';
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  & div {
    overflow: hidden;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  & div:hover {
    background-color: rgb(118, 118, 118);
    color: #ffffff;
  }
`;

interface SPopup {
  items: string[];
  className: string;
  open: boolean;
  onClose: () => void;
  handleSelect: (str: string) => void;
}

function SPopup(props: SPopup) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = (e: globalThis.MouseEvent): void => {
    if (props.open && ref.current && !ref.current.contains(e.target as HTMLElement))
      props.onClose();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [props.open]);

  return (
    <>
      {props.open && (
        <div ref={ref} className={props.className}>
          {props.items.map((item, i) => (
            <div key={i} onClick={() => props.handleSelect(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectPopup;
