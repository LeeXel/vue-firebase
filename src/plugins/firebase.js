import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-database'
// import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'

firebase.default.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase
