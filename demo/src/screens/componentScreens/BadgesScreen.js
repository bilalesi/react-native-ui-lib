import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors, View, Badge, Button, Text} from 'react-native-ui-lib'; //eslint-disable-line
const BadgesSpace = 30;
const plusIcon = require('../../assets/icons/chevronUp.png');
const minusIcon = require('../../assets/icons/chevronDown.png');

export default class BadgesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 42,
    };
  }

  changeLabelValue(value) {
    const currValue = this.state.value;
    const newValue = currValue + value;
    if (newValue >= 1) {
      this.setState({value: newValue});
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text text50 row center marginB-15>Badges</Text>
        <View row center>
          <View center marginR-10 marginL-10>
            <Badge label={'10'} backgroundColor={Colors.blue30} />
            <Badge
              label={'10'}
              containerStyle={{marginTop: BadgesSpace}}
              backgroundColor={Colors.blue30}
              borderWidth={3}
              borderColor={Colors.blue50}
            />
            <Badge
              size="small"
              label={'10'}
              containerStyle={{marginTop: BadgesSpace}}
              backgroundColor={Colors.blue30}
            />
          </View>

          <View center marginR-10 marginL-10>
            <Badge label={this.state.value.toString()} backgroundColor={Colors.red30} />
            <Badge
              label={this.state.value.toString()}
              containerStyle={{marginTop: BadgesSpace}}
              backgroundColor={Colors.red30}
              borderWidth={1}
            />
            <Badge
              size="small"
              label={this.state.value.toString()}
              containerStyle={{marginTop: BadgesSpace}}
              backgroundColor={Colors.red30}
            />
          </View>

          <View center marginR-10 marginL-10>
            <Badge label={'9999'} labelFormatterLimit={3} />
            <Badge
              label={'999'}
              labelFormatterLimit={2}
              containerStyle={{marginTop: BadgesSpace}}
              borderWidth={2}
              borderColor={Colors.white}
            />
            <Badge labelFormatterLimit={1} size="small" label={'99999999'} containerStyle={{marginTop: BadgesSpace}} />
          </View>
        </View>

        <View row marginT-20 marginB-15>
          <Button
            bg-dark60
            style={{width: 40, height: 40, borderWidth: 1, marginRight: 15}}
            iconSource={minusIcon}
            avoidMinWidth
            onPress={() => this.changeLabelValue(-1)}
            onLongPress={() => this.changeLabelValue(-10)}
          />
          <Button
            bg-dark60
            style={{width: 40, height: 40, borderWidth: 1}}
            iconSource={plusIcon}
            avoidMinWidth
            onPress={() => this.changeLabelValue(1)}
            onLongPress={() => this.changeLabelValue(10)}
          />
        </View>
        <Text center>Press buttons to change red badge value by 1.{'\n'}Long press to change it by 10.</Text>

        <Text text50 row center marginT-45>Pimple Badges</Text>
        <View row>
          <View
            center
            column
            style={{justifyContent: 'space-around', alignItems: 'flex-start', width: 140, height: 140}}
          >
            <Text text80 row>
              size={"{'pimpleSmall'}"}
            </Text>
            <Text text80>size={"{'pimpleBig'}"}</Text>
            <Text text80 row>
              size={"{'pimpleHuge'}"}
            </Text>
          </View>

          <View center column style={{justifyContent: 'space-around', width: 40, height: 140}}>
            <Badge containerStyle={{marginLeft: BadgesSpace}} backgroundColor={Colors.green30} />
            <Badge containerStyle={{marginLeft: BadgesSpace}} backgroundColor={Colors.red30} size={'pimpleBig'} />
            <Badge containerStyle={{marginLeft: BadgesSpace}} backgroundColor={Colors.blue30} size={'pimpleHuge'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.dark70,
  },
});
