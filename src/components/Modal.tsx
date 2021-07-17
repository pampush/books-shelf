import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
}

function Modal({ children, open, onClose }: ModalProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  /* Is that viable code?  Manually handling styles */
  React.useEffect(() => {
    document.body.style.position = open ? 'fixed' : '';
    document.body.style.right = open ? '0' : '';
    document.body.style.left = open ? '0' : '';
  }, [open]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
    const node = e.target as HTMLElement;

    node && node.contains(divRef.current)
      ? onClose()
      : () => {
          return null;
        };
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
