/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

//INITIALISING A NEW DATA TYPE (WHICH BASICALLY STATES THAT THE STRING PASSED AS IMAGEURL SHOULD BE AN VALID ONE)
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

//CREATED AN DICE COMPONENT WHICH TAKE PROPER DICE URL AND RETURN IT
const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [dice1, setDice1] = useState<ImageSourcePropType>(DiceOne);
  const [dice2, setDice2] = useState<ImageSourcePropType>(DiceTwo);
  const [dice3, setDice3] = useState<ImageSourcePropType>(DiceThree);
  const [dice4, setDice4] = useState<ImageSourcePropType>(DiceFour);
  const [dice5, setDice5] = useState<ImageSourcePropType>(DiceFive);
  const [dice6, setDice6] = useState<ImageSourcePropType>(DiceSix);

  //BOOLEAN STATE VALUES TO LOCK THE DICE
  const [boolDice1, setBoolDice1] = useState(true);
  const [boolDice2, setBoolDice2] = useState(true);
  const [boolDice3, setBoolDice3] = useState(true);
  const [boolDice4, setBoolDice4] = useState(true);
  const [boolDice5, setBoolDice5] = useState(true);
  const [boolDice6, setBoolDice6] = useState(true);

  const getSetDice1 = (num: number) => {
    switch (num) {
      case 1:
        setDice1(DiceOne);
        break;

      case 2:
        setDice1(DiceTwo);
        break;

      case 3:
        setDice1(DiceThree);
        break;

      case 4:
        setDice1(DiceFour);
        break;

      case 5:
        setDice1(DiceFive);
        break;

      default:
        setDice1(DiceSix);
        break;
    }
  };

  const getSetDice2 = (num: number) => {
    switch (num) {
      case 1:
        setDice2(DiceOne);
        break;

      case 2:
        setDice2(DiceTwo);
        break;

      case 3:
        setDice2(DiceThree);
        break;

      case 4:
        setDice2(DiceFour);
        break;

      case 5:
        setDice2(DiceFive);
        break;

      default:
        setDice2(DiceSix);
        break;
    }
  };

  const getSetDice3 = (num: number) => {
    switch (num) {
      case 1:
        setDice3(DiceOne);
        break;

      case 2:
        setDice3(DiceTwo);
        break;

      case 3:
        setDice3(DiceThree);
        break;

      case 4:
        setDice3(DiceFour);
        break;

      case 5:
        setDice3(DiceFive);
        break;

      default:
        setDice3(DiceSix);
        break;
    }
  };

  const getSetDice4 = (num: number) => {
    switch (num) {
      case 1:
        setDice4(DiceOne);
        break;

      case 2:
        setDice4(DiceTwo);
        break;

      case 3:
        setDice4(DiceThree);
        break;

      case 4:
        setDice4(DiceFour);
        break;

      case 5:
        setDice4(DiceFive);
        break;

      default:
        setDice4(DiceSix);
        break;
    }
  };

  const getSetDice5 = (num: number) => {
    switch (num) {
      case 1:
        setDice5(DiceOne);
        break;

      case 2:
        setDice5(DiceTwo);
        break;

      case 3:
        setDice5(DiceThree);
        break;

      case 4:
        setDice5(DiceFour);
        break;

      case 5:
        setDice5(DiceFive);
        break;

      default:
        setDice5(DiceSix);
        break;
    }
  };

  const getSetDice6 = (num: number) => {
    switch (num) {
      case 1:
        setDice6(DiceOne);
        break;

      case 2:
        setDice6(DiceTwo);
        break;

      case 3:
        setDice6(DiceThree);
        break;

      case 4:
        setDice6(DiceFour);
        break;

      case 5:
        setDice6(DiceFive);
        break;

      default:
        setDice6(DiceSix);
        break;
    }
  };

  //HapticFeedback required function settings
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  //Logic behind rotating of dice
  const onTap = () => {
    for (let i = 1; i <= 6; i++) {
      let num = Math.ceil(Math.random() * 6);
      if (i === 1 && boolDice1 === true) {
        getSetDice1(num);
      } else if (i === 2 && boolDice2) {
        getSetDice2(num);
      } else if (i === 3 && boolDice3) {
        getSetDice3(num);
      } else if (i === 4 && boolDice4) {
        getSetDice4(num);
      } else if (i === 5 && boolDice5) {
        getSetDice5(num);
      } else if (i === 6 && boolDice6) {
        getSetDice6(num);
      }
    }
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };

  //GAME RESET FUNCTION
  const reset = () => {
    setDice1(DiceOne);
    setDice2(DiceTwo);
    setDice3(DiceThree);
    setDice4(DiceFour);
    setDice5(DiceFive);
    setDice6(DiceSix);

    setBoolDice1(true);
    setBoolDice2(true);
    setBoolDice3(true);
    setBoolDice4(true);
    setBoolDice5(true);
    setBoolDice6(true);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#CAD3C8'} />
      <Text style={styles.headerText}>Welcome to, TENZI</Text>
      {dice1 === dice2 &&
        dice2 === dice3 &&
        dice3 === dice4 &&
        dice5 === dice6 &&
        dice6 === dice1 && (
          <Text style={styles.winText}>Congratulations!! You Won..</Text>
        )}
      <View style={styles.diceContainer}>
        <View style={styles.leftSide}>
          <Pressable
            style={[!boolDice1 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice1(!boolDice1)}>
            <Dice imageUrl={dice1} />
            {!boolDice1 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
          <Pressable
            style={[!boolDice2 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice2(!boolDice2)}>
            <Dice imageUrl={dice2} />
            {!boolDice2 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
          <Pressable
            style={[!boolDice3 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice3(!boolDice3)}>
            <Dice imageUrl={dice3} />
            {!boolDice3 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
        </View>
        <View style={styles.rightSide}>
          <Pressable
            style={[!boolDice4 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice4(!boolDice4)}>
            <Dice imageUrl={dice4} />
            {!boolDice4 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
          <Pressable
            style={[!boolDice5 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice5(!boolDice5)}>
            <Dice imageUrl={dice5} />
            {!boolDice5 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
          <Pressable
            style={[!boolDice6 && styles.lock, styles.diceSubContainer]}
            onPress={() => setBoolDice6(!boolDice6)}>
            <Dice imageUrl={dice6} />
            {!boolDice6 && <Text style={styles.lockText}>Locked</Text>}
          </Pressable>
        </View>
      </View>
      <Pressable onPress={onTap} style={styles.bttn}>
        <Text style={styles.btnText}>Roll The Dice</Text>
      </Pressable>
      {dice1 === dice2 &&
        dice2 === dice3 &&
        dice3 === dice4 &&
        dice5 === dice6 &&
        dice6 === dice1 && (
          <Pressable onPress={reset} style={styles.resetBttn}>
            <Text style={styles.resetBttnText}>Reset Game</Text>
          </Pressable>
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAD3C8',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B3B98',
    textAlign: 'center',
  },
  diceContainer: {
    paddingTop: 150,
    flexDirection: 'row',
    alignSelf: 'center',
    columnGap: 28,
  },
  leftSide: {},
  rightSide: {},
  diceSubContainer: {
    marginBottom: 18,
  },
  lock: {
    position: 'relative',
    borderWidth: 2,
    borderRadius: 8,
  },
  lockText: {
    position: 'absolute',
    alignSelf: 'center',
    top: '38%',
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  diceImage: {
    position: 'relative',
    height: 100,
    width: 100,
  },
  bttn: {
    alignSelf: 'center',
    backgroundColor: '#3B3B98',
    width: 160,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 25,
    borderRadius: 4,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
  winText: {
    fontSize: 24,
    color: '#182C61',
    alignSelf: 'center',
    marginTop: 9,
  },
  resetBttn: {
    alignSelf: 'center',
    backgroundColor: '#182C61',
    width: 170,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 15,
    borderRadius: 4,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  resetBttnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default App;
