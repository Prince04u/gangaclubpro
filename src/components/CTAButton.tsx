const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";

interface Props {
  text?: string;
  className?: string;
}

const CTAButton = ({ text = "Register Now", className = "" }: Props) => (
  <a
    href={REGISTER_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-cta shimmer inline-block text-center ${className}`}
  >
    {text}
  </a>
);

export default CTAButton;
