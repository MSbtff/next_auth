import RegisterForm from '@/components/RegisterForm';
import {getSession} from '@/lib/getSession';

export default async function page() {
  const session = await getSession();
  console.log(session);
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
