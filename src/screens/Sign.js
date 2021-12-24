import React, {useState, createRef} from 'react';

  import 'react-native-gesture-handler';
  import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    Modal,
    ScrollView,
  } from 'react-native';

  
  const Sign = (props) => {
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordchk, setUserPasswordchk] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [errortext2, setErrortext2] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  
    const idInputRef = createRef();
    const passwordInputRef = createRef();
    const passwordchkInputRef = createRef();
    const nameInputRef = createRef();

    const handleSubmitButton = () => {
      setErrortext('');
  
      if (!userName) {
        alert('이름을 입력해주세요');
        return;
      }
      if (!userId) {
        alert('id를 입력해주세요');
        return;
      }
      
      if (!userPassword) {
        alert('비밀번호를 입력해주세요');
        return;
      }
      if (userPasswordchk != userPassword) {
        alert('비밀번호가 일치하지 않습니다');
        return;
      }
      //Show Loader
      setLoading(true);
  
      var userTable = {
        user_nick: userName,
        user_id: userId,
        user_pw: userPassword,
      };
      var formBody = [];


      for (var key in userTable) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
      fetch('http://localhost:3001/api/user/register', {
        method: 'POST',
        body: formBody,
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          setLoading(false);
          setErrortext2('');
          console.log(responseJson);
          // If server response message same as Data Matched
          if (responseJson.status === 'success') {
            setIsRegistraionSuccess(true);
            console.log('Registration Successful. Please Login to proceed');
          } else if (responseJson.status === 'duplicate') {
            setErrortext2('이미 존재하는 아이디입니다.');
          }
        })
        .catch((error) => {
          //Hide Loader
          setLoading(false);
          console.error(error);
        });
    };
  
    if (isRegistraionSuccess) {
      return (
        <View >
          <View style={{flex: 1}} />
          <View style={{flex: 2}}>
            <View
              style={{
                height: hp(13),
                justifyContent: 'center',
                alignItems: 'center',
              }}>

            </View>
            <View
              style={{
                height: hp(7),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>
                회원가입이 완료되었습니다.
              </Text>
            </View>
  
            <View style={{height: hp(20), justifyContent: 'center'}}>
              <View>
                <TouchableOpacity

                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text style={{color: 'white'}}>
                    로그인하기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View>
        <View >
          <View >
            <Text >회원가입</Text>
          </View>
        </View>
  
        <View>
          <TextInput
   
            placeholder={'아이디(5자 이상, 영문, 숫자)'}
            onChangeText={(userId) => setUserId(userId)}
            ref={idInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <TextInput
       
            secureTextEntry={true}
            placeholder={'비밀번호(8자 이상)'}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            ref={passwordInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordchkInputRef.current && passwordchkInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <TextInput
         
            secureTextEntry={true}
            placeholder={'비밀번호 확인'}
            onChangeText={(UserPasswordchk) =>
              setUserPasswordchk(UserPasswordchk)
            }
            ref={passwordchkInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              nameInputRef.current && nameInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
  
        <View style={{flex: 0.5, justifyContent: 'center'}}>
          {userPassword !== userPasswordchk ? (
            <Text>
              비밀번호가 일치하지 않습니다.
            </Text>
          ) : null}
        </View>
  
        <View >
          <TextInput
           
            placeholder={'닉네임'}
            onChangeText={(UserName) => setUserName(UserName)}
            ref={nameInputRef}
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>

        <View>
            <TouchableOpacity onPress={handleSubmitButton}>
              <Text style={{color: 'black'}}>회원가입</Text>
            </TouchableOpacity>
        </View>
  
  
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          {errortext2 !== '' ? (
            <Text>{errortext2}</Text>
          ) : null}
        </View>
  
        <View style={{flex: 0.75}}>

          <View>
            <TouchableOpacity onPress={handleSubmitButton}>
              <Text style={{color: 'black'}}>회원가입</Text>
            </TouchableOpacity>
          </View>

        </View>


        
        <View style={{flex: 3}} />
      </View>
    );
  };

  
export default Sign;