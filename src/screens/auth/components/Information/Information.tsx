import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group';

import TextCustom from '~components/TextCustom';
import { InformationProps } from './Information.type';
import AvatarImage from '~assets/images/pngs/avatar.png';
import CameraIcon2 from '~assets/images/svgs/camera-2.svg';
import {
  educationLevels,
  industries,
  radioButtonsData,
} from '~constants/common';
import DatePickerCustom from '~components/DatePickerCustom/DatePickerCustomer';
import Input from '~components/Input';
import Select from '~components/Select';

import { Colours, GlobalStyles } from '~styles';
import styles from './Information.style';

const Information: React.FC<InformationProps> = ({ onSubmit }) => {
  const [avatar, setAvatar] = useState<ImageSourcePropType>(AvatarImage);
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);
  const [visibleModalDatePicker, setVisibleModalDatePicker] = useState(false);
  const [value, setValue] = useState({
    name: '',
    country: '',
    birthday: '',
    gender: 'Male',
    educationLevel: '',
    industry: '',
  });

  const openImagePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      NSCameraUsageDescription: 0.2,
      cropping: true,
    }).then(image => setAvatar(image));
  };

  const handleRadioButton = (radioButtonsArray: RadioButtonProps[]) => {
    setRadioButtons(
      radioButtonsArray.map(radio => {
        if (radio.selected) {
          setValue({ ...value, gender: radio.value || '' });
        }

        return {
          ...radio,
          color: radio.selected ? Colours.RED[500] : Colours.BACKGROUND[100],
          borderColor: radio.selected
            ? Colours.RED[500]
            : Colours.BACKGROUND[100],
        };
      }),
    );
  };

  return (
    <View>
      <TextCustom
        style={[GlobalStyles.globalStyle, styles.information_skip]}
        onPress={onSubmit}>
        Skip
      </TextCustom>
      <View style={styles.information}>
        <TextCustom style={styles.information_text}>
          Almost there....
        </TextCustom>
        <TextCustom style={styles.information_text}>
          set up your profile.
        </TextCustom>

        <View style={styles.information_image}>
          <Image source={avatar} style={styles.information_image_avatar} />
          <TouchableOpacity
            style={styles.information_image_icon}
            onPress={openImagePicker}>
            <View style={styles.information_image_icon_background} />
            <CameraIcon2 />
          </TouchableOpacity>
        </View>

        <View style={styles.information_inputs}>
          <Input
            name="Name"
            placeholder="Name"
            style={{ marginBottom: 16 }}
            value={value.name}
            onChangeText={text => setValue({ ...value, name: text })}
          />
          <Input
            name="Country"
            placeholder="Your country*"
            value={value.country}
            onChangeText={text => setValue({ ...value, country: text })}
          />
          <View style={styles.information_radio_list}>
            <TextCustom style={styles.information_radio_title}>
              Gender
            </TextCustom>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={handleRadioButton}
              layout="row"
            />
          </View>

          <Input
            name="Birthday"
            placeholder="Birthday"
            value={value.birthday}
            onFocus={() => setVisibleModalDatePicker(true)}
            onBlur={() => setVisibleModalDatePicker(false)}
            onPress={() => setVisibleModalDatePicker(true)}
          />
          <Select
            options={educationLevels}
            value={value.educationLevel}
            style={{ marginVertical: 24 }}
            placeholder="Education Level"
            onChange={itemSelected =>
              setValue({ ...value, educationLevel: itemSelected as string })
            }
          />
          <Select
            options={industries}
            value={value.industry}
            placeholder="Industry"
            onChange={itemSelected =>
              setValue({ ...value, industry: itemSelected as string })
            }
          />
        </View>
        <DatePickerCustom
          isVisible={visibleModalDatePicker}
          onClose={() => setVisibleModalDatePicker(false)}
          selected={value.birthday}
          onDateChange={date => {
            setValue({ ...value, birthday: date });
            setVisibleModalDatePicker(false);
          }}
        />
      </View>
    </View>
  );
};

export default Information;
