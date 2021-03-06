import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Platform } from 'react-native';
import {
    Actions,
} from 'react-native-router-flux'


import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules'

class AuthForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        // actionMode: 'I want to register',
        hasErrors: false,
        form: {
            email: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            username: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    isUsername: true
                }
            },
            // password: {
            //     value: "",
            //     valid: false,
            //     type: "textinput",
            //     rules: {
            //         isRequired: true,
            //         minLength: 6
            //     }
            // },
            // confirmPassword: {
            //     value: "",
            //     valid: false,
            //     type: "textinput",
            //     rules: {
            //         isRequired: true,
            //         confirmPass: "password"
            //     }
            // }
        }
    }

    formHasErrors = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Oops, check info</Text>
            </View>

            : null
    )

    // confirmPassword = () => (
    //     this.state.type != 'Login' ?
    //         <Input
    //             placeholder="Confirm Password"
    //             placeholderTextColor="#cecece"
    //             type={this.state.form.confirmPassword.type}
    //             value={this.state.form.confirmPassword.value}
    //             onChangeText={value => this.updateInput("confirmPassword", value)}
    //             secureTextEntry
    //         // overrideStyle=
    //         />
    //         : null

    // )

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            // actionMode: type === 'Login' ? 'I want to Login' : 'I want to register'
        })
    }

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        })

        let formCopy = this.state.form;
        formCopy[name].value = value;

        //rules

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);

        formCopy[name].valid = valid;


        this.setState({
            form: formCopy
        })

    }

    // submitUser = () => {
    //     let isFormValid = true;
    //     let formToSubmit = {}
    //     const formCopy = this.state.form;

    //     for (let key in formCopy) {
    //         if (this.state.type === 'Login') {
    //             //Login
    //             // if (key !== 'confirmPassword') {
    //             //     isFormValid = isFormValid && formCopy[key].valid;
    //             //     formToSubmit[key] = formCopy[key].valid;
    //             // }

    //         } else {
    //             //Register
    //             isFormValid = isFormValid && formCopy[key].valid;
    //             formToSubmit[key] = formCopy[key].valid;

    //         }

    //     }
    //     if (isFormValid) {
    //         if (this.state.type === 'Login') {
    //             this.props.signIn(formToSubmit)

    //         } else {
    //             this.props.signUp(formToSubmit)
    //         }

    //     } else {
    //         this.setState({
    //             hasErrors: true
    //         })
    //     }

    //     signIn = (formToSubmit) => {

    //     }

    // }

    render() {
        return (
            <View>
                <Input
                    placeholder="Enter your username"
                    placeholderTextColor="#cecece"
                    type={this.state.form.username.type}
                    value={this.state.form.username.value}
                    onChangeText={value => this.updateInput("username", value)}

                // overrideStyle=
                />

                <Input
                    placeholder="Enter Email"
                    placeholderTextColor="#cecece"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    autoCaptilize="none"
                    keyboardType={"email-address"}
                    onChangeText={value => this.updateInput("email", value)}
                // overrideStyle=
                />

                {/* <Input
                    placeholder="Enter your password"
                    placeholderTextColor="#cecece"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={value => this.updateInput("password", value)}
                    secureTextEntry
                // overrideStyle=
                />
                {this.confirmPassword()}
                {this.formHasErrors()} */}

                <View style={{ marginTop: 20 }}>
                    {/* <View style={styles.button}>
                        <Button
                            title={this.state.action}
                            onPress={this.submitUser}
                        />


                    </View> */}
                    {/* <View style={styles.button}>
                        <Button
                            title={this.state.actionMode}
                            onPress={this.changeFormType}
                        />
                    </View> */}
                    <View style={styles.button}>
                        <Button
                            title="Login"
                            onPress={() => this.props.goNext()}
                        />


                    </View>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        ...Platform.select({
            ios: {
                marginBottom: 0
            }
        })
    }
})

export default AuthForm;