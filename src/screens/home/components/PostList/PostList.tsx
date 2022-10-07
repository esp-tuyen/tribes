import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import TimeAgo from 'react-native-timeago';

import HomeLayout from '../HomeLayout';
import TextCustom from '~components/TextCustom';
import { PostListProps, IPost } from './PostList.type';

import styles from './PostList.style';

const PostList: React.FC<PostListProps> = ({ name, posts }) => {
  const PostItem = ({ post }: { post: IPost }) => (
    <TouchableOpacity style={styles.post_item}>
      <Image source={post.image} style={styles.post_item_image} />
      <View style={styles.post_item_info}>
        <TextCustom
          style={styles.post_item_info_name}
          numberOfLines={3}
          ellipsizeMode="tail">
          {post.name}
        </TextCustom>
        <TextCustom style={styles.post_item_info_time}>
          <TimeAgo time={post.createAt} />
        </TextCustom>
      </View>
    </TouchableOpacity>
  );

  return (
    <HomeLayout
      horizontal
      style={styles.post_list}
      title={name}
      isSeeMore
      isBackground>
      {posts &&
        posts.map((post, index) => <PostItem key={index} post={post} />)}
    </HomeLayout>
  );
};

export default PostList;
