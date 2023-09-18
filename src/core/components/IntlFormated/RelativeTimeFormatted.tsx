import React from 'react';
import { FormattedRelativeTime } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface RelativeTimeFormattedProps {
    date?: number
    unit?: | "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
}
function RelativeTimeFormatted({ date = 5, unit = 'second' }: RelativeTimeFormattedProps) {
    return (
        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>RelativeTimeFormatted: </Text>
            <FormattedRelativeTime
                value={date}
                unit={unit}
                updateIntervalInSeconds= {0}
                numeric="auto"
            />
        </div>
    );
}

export default RelativeTimeFormatted;
