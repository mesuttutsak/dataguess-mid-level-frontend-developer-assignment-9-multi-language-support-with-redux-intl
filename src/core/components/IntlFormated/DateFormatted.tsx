import { FormattedDate } from 'react-intl';

import styles from "./intlFormated.module.scss";

import Text from '../Text';


function DateFormatted() {
    const date = new Date();

    return (
        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>FormattedDate: </Text>
            <FormattedDate
                value={date}
                year="numeric"
                month="long"
                day="numeric"
            />
        </div>
    );
}

export default DateFormatted;
