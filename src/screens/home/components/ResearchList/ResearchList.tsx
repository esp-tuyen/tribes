import React from 'react';
import { View } from 'react-native';
import { ResearchListProps } from './ResearchList.type';
import TextCustom from '~components/TextCustom';

import styles from './ResearchList.style';
import { GlobalStyles } from '~styles';

const ResearchList: React.FC<ResearchListProps> = ({ name, researchs }) => {
  return (
    <View style={[GlobalStyles.globalStyle, styles.research]}>
      <TextCustom style={styles.research_name}>{name}</TextCustom>
      <View style={styles.research_list}>
        {researchs.map((research, index) => (
          <TextCustom key={index} style={styles.research_item}>
            {research}
          </TextCustom>
        ))}
      </View>
    </View>
  );
};
export default ResearchList;
