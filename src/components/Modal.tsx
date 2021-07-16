import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
}

function Modal({ children, open, onClose }: ModalProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {

    const node = e.target as HTMLElement;
    console.log(node, divRef.current);

    node && node.contains(divRef.current) ? onClose() : '';
  };

  return (
    <>
      {open && (
        <Container ref={divRef} onClick={handleClick}>
          {children}
        </Container>
      )}
    </>
  );
}

export default Modal;
