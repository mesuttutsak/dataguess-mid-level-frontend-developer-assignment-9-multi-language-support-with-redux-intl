import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';

const HomePage = () => {
    const params = useParams()
    return (
            <FormattedMessage id='welcome'/>
    )
}

export default HomePage