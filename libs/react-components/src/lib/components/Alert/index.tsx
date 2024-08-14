import React,  { useState }  from 'react';
import world from '../../assets/world-icon.svg';
import close from '../../assets/close.svg';
import styles from './styles.module.scss';

interface AlertProps {
  /**
   * Content to be displayed in the Alert 
   */
  text1: string;
  /**
   * The label of the link
   */
  label: string;
  header: string;
  text2: string;
}

const Alert: React.FC<AlertProps> = ({text1, label, header, text2}) => {
    const [visible, setVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setVisible(false);
    };
    const handleLearnMoreClick = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    if (!visible) {
        return null;  
    }

  return (
    <div className={styles.disclaimer}>
        <div className={styles.img}>
            <img src={world} alt="Imagen" height="24px" width="24px" />
        </div>
        <div className={styles.content}>
            <p>{text1}</p>
        </div>    
        <div className={styles.linkContainer}>
            <button 
                type="button" 
                className={styles.info}
                onClick={handleLearnMoreClick}
            >
                {label}
            </button>
            <button 
                type="button"
                className={styles.close}
                onClick={handleClose}
            >
                <img src={close} alt="Close" height="24px" width="24px" />
            </button>
        </div>
        {isModalOpen && (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.modalClose} onClick={handleModalClose}>&times;</span>
                <p className={styles.header}>{header}</p>
                <div className={styles.spacer}></div>
                <p className={styles.textDisclaimer}>{text2}</p>
            </div>
        </div>
        )}
    </div>

    
  );
};

Alert.displayName = 'Alert';

export default Alert;
