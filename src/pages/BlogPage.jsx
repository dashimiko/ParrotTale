/* eslint-disable no-unused-vars */
import React from 'react';
import { ARTICLES } from '../utils/constants';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ArticlesList from '../components/ArticlesList/ArticlesList';

function BlogPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ArticlesList articles={ARTICLES} />
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
