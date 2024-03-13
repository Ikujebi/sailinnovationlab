import {FC} from "react";

interface ModalContentProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalContent: FC<ModalContentProps> = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reset Successful</h2>
        <p>Your password has been successfully reset.</p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
