import RegisterForm from '@/components/RegisterForm';
import {getSession} from '@/lib/getSession';

export default function page() {
  const session = getSession();
  console.log(session);
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
