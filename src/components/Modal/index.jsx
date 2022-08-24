import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './styles.scss';

function Modal({ children }) {
  const portalNode = document.createElement('div');
  portalNode.className = 'modal-background';
  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return createPortal(children, portalNode);
}

export default Modal;
