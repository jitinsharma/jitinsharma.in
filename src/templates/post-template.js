// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
    data: {
        markdownRemark: MarkdownRemark
    }
};

const PostTemplate = ({ data }: Props) => {
    const { title: siteTitle, subtitle: siteSubtitle, url, twitterHandle } = useSiteMetadata();
    const { title: postTitle, description: postDescription, banner: pageBanner } = data.markdownRemark.frontmatter;
    const { slug } = data.markdownRemark.fields;
    const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

    return (
        <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} bannerImage={pageBanner}>
            <Post post={data.markdownRemark} />
        </Layout>

    );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        banner
      }
    }
  }
`;

export default PostTemplate;
