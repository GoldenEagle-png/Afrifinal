import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function SocialHandle() {
    return (
        <>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
                <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="/" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </>
    );
}

export default SocialHandle;