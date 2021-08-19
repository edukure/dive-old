import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../config/mongodb';

import Link from 'next/link';
import { Button } from '@chakra-ui/button';

const NewUserPage = ({ githubData }) => {
  return (
    <div>
      hey {githubData?.login}!!
      <Link href="/">
        <Button as="a">confirmar</Button>
      </Link>
    </div>
  );
};

export default NewUserPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accessToken } = await getSession(context);

  const { db } = await connectToDatabase();

  const session = await db.collection('sessions').findOne({ accessToken: accessToken });
  if (!session) return;

  const { userId } = session;

  const account = await db.collection('accounts').findOne({ userId: userId });

  if (!account) return;

  const { accessToken: githubAccessToken } = account;

  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${githubAccessToken}`,
    },
  });

  const githubData = await response.json();
  const { login } = githubData;

  await db.collection('users').updateOne({ _id: userId }, { $set: { githubUser: login } });

  return {
    props: { githubData },
  };
};
