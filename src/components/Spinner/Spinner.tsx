import { PiSpinner } from 'react-icons/pi';

import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <PiSpinner className={styles.icon} />
      Loading, please wait...
    </div>
  );
};
