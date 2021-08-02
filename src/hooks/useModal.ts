import React from 'react';

const useModal = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.body.style.position = open ? 'fixed' : '';
    document.body.style.right = open ? '0' : '';
    document.body.style.left = open ? '0' : '';
  }, [open]);


  const openModalWindow = () => setOpen(true);
  const closeModalWindow = () => setOpen(false);

  return { open, openModalWindow, closeModalWindow, divRef };
};

export { useModal };
