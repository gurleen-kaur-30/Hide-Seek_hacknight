 import React, { Component } from 'react';
 import ImageUploader from 'react-firebase-file-uploader';
 import firebase from 'firebase';
 import './App.css';
 import { Form, Text, NestedField, Select,TextArea } from 'react-form';
 var userid = 0;


 var config = {
     apiKey: "AIzaSyA4XgemiAnxGRJtFqVWDcFHpc__6ihwjMU",
     authDomain: "abcd-625a7.firebaseapp.com",
     databaseURL: "https://abcd-625a7.firebaseio.com",
     projectId: "abcd-625a7",
     storageBucket: "abcd-625a7.appspot.com",
     messagingSenderId: "151564493445"
   };
   firebase.initializeApp(config);

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


  const QuestionFields = () => (

    <table>
      <tr>
        <td>
          <label htmlFor="name"> Name </label>
        </td>
      <td>
      <Text field="name" id="name" />
      </td>
      </tr>
      <br/>
      <tr>
        <td>
      <label htmlFor="email"> E-mail ID </label>
        </td>
       <td>
      <Text field="email" id="email" />
      </td>
      </tr>
      <br/>
      <tr>
      <td>
      <label htmlFor="type"> What did you lose?  </label>
      </td>
      <td>
      <Select field="type" id="type" options={typeOptions} className="mb-4"/>
      </td>
      </tr>

      <br/>
      <tr>
      <td>
      <label htmlFor="desc"> Description </label>
      </td>
      <td>
      <TextArea field="desc" id="desc" />
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="upload"> upload a picture </label>
      </td>
      <td>

    <ImageUploader
                url="http://localhost:3000"
                 withIcon={true}
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}

                />
      </td>
      </tr>
    </table>
  )



  class NestedFieldExample extends Component {


    constructor( props ) {
      super( props );
      this.state = { userid : 1};
    }

    yo()
    {
      const upload= document.getElementById("upload").value;
      window.alert(upload);
    }

    updateUserId(userid){
      return userid + 1;
    }

    postToFirebase()
    {
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const type = document.getElementById("type").value;
     const desc= document.getElementById("desc").value;
    // const upload= document.getElementById("upload").value;
  //    firebase.database().ref('lost/' + userid).set({
  //  username: name,
  //  email: email,
  //  type: type,
  //  desc: desc
  //
  // });

  var postsRef = firebase.database().ref('lost/');

var newPostRef = postsRef.push();
newPostRef.set({
  username: name,
  email: email,
  type: type,
  desc: desc
});

    }





    render() {
      return (
        <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form4">

              <NestedField field="questions">
                <QuestionFields />
              </NestedField>
              <br/>

              <button type="submit" className="mb-4 btn btn-primary" onClick={()=>this.postToFirebase()}>
                Submit
              </button>
            </form>
          )}
        </Form>
      );
    }

}

  export default NestedFieldExample;
