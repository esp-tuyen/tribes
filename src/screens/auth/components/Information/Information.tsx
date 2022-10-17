import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
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
import Button from '~components/Button';

import { Colours } from '~styles';
import styles from './Information.style';
import Select from '~components/Select';

const Information: React.FC<InformationProps> = ({ onSubmit }) => {
  const [avatar, setAvatar] = useState<ImageSourcePropType>(AvatarImage);
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);
  const [visibleModalDatePicker, setVisibleModalDatePicker] = useState(false);
  const [
    visibleModalSelectEducationLevel,
    setVisibleModalSelectEducationLevel,
  ] = useState(false);
  const [visibleModalSelectIndustry, setVisibleModalSelectIndustry] =
    useState(false);
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
      <ScrollView>
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
            <Input
              name="Education Level"
              placeholder="Education Level"
              value={value.educationLevel}
              style={{ marginVertical: 24 }}
              icon="arrow-down"
              onFocus={() => setVisibleModalSelectEducationLevel(true)}
              onBlur={() => setVisibleModalSelectEducationLevel(false)}
              onPress={() => setVisibleModalSelectEducationLevel(true)}
            />
            <Input
              name="Industry"
              placeholder="Industry"
              value={value.industry}
              icon="arrow-down"
              onFocus={() => setVisibleModalSelectIndustry(true)}
              onBlur={() => setVisibleModalSelectIndustry(false)}
              onPress={() => setVisibleModalSelectIndustry(true)}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.information_line} />

      <Button title="Next" onPress={onSubmit} style={styles.information_btn} />

      <DatePickerCustom
        isVisible={visibleModalDatePicker}
        onClose={() => setVisibleModalDatePicker(false)}
        selected={value.birthday}
        onDateChange={date => {
          setValue({ ...value, birthday: date });
          setVisibleModalDatePicker(false);
        }}
      />

      <Select
        isVisible={visibleModalSelectEducationLevel}
        options={educationLevels}
        onClose={() => setVisibleModalSelectEducationLevel(false)}
        selectedValue={value.educationLevel}
        onValueChange={itemSelected =>
          setValue({ ...value, educationLevel: itemSelected as string })
        }
      />

      <Select
        isVisible={visibleModalSelectIndustry}
        options={industries}
        onClose={() => setVisibleModalSelectIndustry(false)}
        selectedValue={value.industry}
        onValueChange={itemSelected =>
          setValue({ ...value, industry: itemSelected as string })
        }
      />
    </View>
  );
};

export default Information;
