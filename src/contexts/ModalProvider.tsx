import React from 'react';

interface ModalContextProps {
  open: boolean;
  content: JSX.Element;
  setContent: (elem: JSX.Element) => void;
  openModalWindow: () => void;
  closeModalWindow: () => void;
}

export const ModalContext = React.createContext<ModalContextProps>({
  open: false,
  content: <></>,
  setContent: (elem) => elem,
  openModalWindow: () => null,
  closeModalWindow: () => null,
});

interface ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [content, _setContent] = React.useState<JSX.Element>(<></>);

  const setContent = (elem: JSX.Element) => _setContent(elem);
  const openModalWindow = () => setOpen(true);
  const closeModalWindow = () => setOpen(false);
  
  return (
    <ModalContext.Provider value={{ content, open, openModalWindow, closeModalWindow, setContent }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContextValue = () => React.useContext(ModalContext);

export default ModalProvider;
