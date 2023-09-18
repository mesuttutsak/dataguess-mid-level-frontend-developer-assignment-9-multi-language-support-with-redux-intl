import { FormattedPlural } from 'react-intl';

import styles from "./intlFormated.module.scss";


import Text from '../Text';
interface FormatPluralOptions {
    value: number;
    other?: React.ReactNode;
    zero?: React.ReactNode;
    one?: React.ReactNode;
    two?: React.ReactNode;
    few?: React.ReactNode;
    many?: React.ReactNode;
    children?(value: React.ReactNode): React.ReactElement | null;
}

function PluralFormatted({ value, other, zero, one, two, few, many, children }: FormatPluralOptions) {
    return (

        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>FormattedPlural: </Text>
            <FormattedPlural
                value={value}
                other={`You have ${3} messages.`}
                zero={zero}
                one={one}
                two={two}
                few={few}
                many={many}
            />
        </div>
    );
}

export default PluralFormatted;
