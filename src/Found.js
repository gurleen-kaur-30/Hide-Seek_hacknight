import React, { Component } from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-file-uploader';
import logo from './logo.svg';
import './App';
import './App.css';

import { Form, Text, NestedField, Select, TextArea } from 'react-form';

  var config = {
    apiKey: "AIzaSyA4XgemiAnxGRJtFqVWDcFHpc__6ihwjMU",
    authDomain: "abcd-625a7.firebaseapp.com",
    databaseURL: "https://abcd-625a7.firebaseio.com",
    projectId: "abcd-625a7",
    storageBucket: "abcd-625a7.appspot.com",
    messagingSenderId: "151564493445"
  };
  //firebase.initializeApp(config);


  const typeOptions = [
    {
      label: 'Specs',
      value: 'specs',
    },
    {
      label: 'Keys',
      value: 'keys',
    },
    {
      label: 'Earphones',
      value: 'earphones',
    },
    {
      label: 'Bottle',
      value: 'bottle',
    },
    {
      label: 'Phone',
      value: 'phone',
    },
    {
      label: 'Card (id/atm)',
      value: 'card',
    },
    {
      label: 'Sports Equipment',
      value: 'sportsEq',
    },
    {
      label: 'Watch',
      value: 'watch',
    },
    {
      label: 'Wallet',
      value: 'wallet',
    },
    {
      label: 'Others...',
      value: 'others',
    },
  ]

  const collectFromOptions = [
    {
      label: 'Men\'s Hostel Security Guard (near mess area)' ,
      value: 'mensHostelSec',
    },
    {
      label: 'Innovation Centre Security Guard',
      value: 'innovCentreSec',
    },
    {
      label: 'Old Acad Reception',
      value: 'oldAcadRec',
    },
    {
      label: 'New Acad Reception',
      value: 'newAcadRec',
    },
    {
      label: 'Front Gate 1 (near football ground)',
      value: 'frontGate1',
    },
    {
      label: 'Front Gate 2',
      value: 'frontGate2',
    },
    {
      label: 'Back Gate',
      value: 'backGate',
    },
  ]

  const validator = username => (
    !username || username.trim() === ''
      ? window.alert("Please fill all required fields")
      : {success: "Correct"} )
  

  const QuestionFields = () => (
    <div>
      <table>
        <tr>
          <td>
            <label htmlFor="type">Type</label>
          </td>
          <td>
          <Select field="type" id="type" options={typeOptions} className="mb-4" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="place">Where to collect from ?</label>
          </td>
          <td>
            <Select field="place" id="place" options={collectFromOptions} className="mb-4" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="desc">Description</label>
          </td>
          <td>
            <TextArea field="desc" id="desc"
             validate = {validator}/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="img">Upload Image</label>
          </td>
          <td>
          <ImageUploader
                //url="http://localhost:9090/notmultiple"
                storageRef={firebase.storage().ref('images')}
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                // label="Upload a picture"
                />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="contact_info">Contact info (optional)</label>
          </td>
          <td>
            <Text field="contact_info" id="contact_info" />
          </td>
        </tr>
      </table>
    </div>
  )

  class Found extends Component {

    constructor( props ) {
      super( props );
      this.state = {};
    }


    postToFirebase(){
      const type = document.getElementById("type").value;
      const place = document.getElementById("place").value;
      const desc = document.getElementById("desc").value;
      const contact_info = document.getElementById("contact_info").value;
      var postsRef = firebase.database().ref('found/');
      var newPostRef = postsRef.push();
      newPostRef.set({
        type: type,
        place: place,
        desc: desc,
        contact_info: contact_info,
      });
      window.alert("Submitted!");
    }

    render() {
      return (
        <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form4" >
              <NestedField field="questions">
                <QuestionFields />
              </NestedField>
              <button type="submit" className="mb-4 btn btn-primary" onClick={()=>this.postToFirebase()}>
                Submit
              </button>
            </form>
          )}
        </Form>
      );
    }
  }

  export default Found;
