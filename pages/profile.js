import { useState, useEffect } from "react";

import Layout from "../components/Layout";

import { GetUserProfile } from "../lib/auth";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    GetUserProfile().then((user) => setUser({ user }));
  }, []);

  return (
    <Layout title="User Profile">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
};

export default ProfilePage;
