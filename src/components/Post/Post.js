// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';
import Share from '../Share/Share';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { url, twitterHandle } = useSiteMetadata();

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">Home</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} twitterHandle={twitterHandle} />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Share
            socialConfig={{
                twitterHandle,
                config: {
                    url: `${url}${slug}`,
                    title: title,
                },
            }}
            tags={tags}/>
            {/* <Author /> */}
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
