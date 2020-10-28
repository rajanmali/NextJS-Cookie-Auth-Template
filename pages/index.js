import { Component } from "react";
import Link from "next/link";

import Layout from "../components/Layout";

class Index extends Component {
  state = {};
  render() {
    return (
      <Layout title="Home">
        <Link href="/profile">
          <a>Go To Profile</a>
        </Link>
      </Layout>
    );
  }
}

export default Index;
