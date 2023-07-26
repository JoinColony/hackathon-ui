import Container from 'components/Container';
import { BsCheckCircle } from 'react-icons/bs';

interface NotificationProps {
  content: React.ReactNode;
}

const Notification = ({ content }: NotificationProps) => {
  return (
    <Container>
      <div className="px-6 py-3 bg-emerald-50 rounded-lg border border-emerald-600 text-gray-900 text-sm font-semibold leading-tight gap-2 flex items-center">
        <BsCheckCircle className="text-base text-emerald-600" />
        {content}
      </div>
    </Container>
  );
};

export default Notification;
