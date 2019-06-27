<template>
  <ion-app>
    <ion-page class="show-page pageDetails">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>TrackTik Frontend Challenge</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list class="row sitesList">
        <ion-item class="col-12 navBack" @click="goBack()" color="primary">
          <ion-grid>
            <ion-row class="row">
              <ion-col class="col-1 d-flex flex-column justify-content-center">
                <router-link to="/">
                  <ion-icon name="arrow-back" class="back"></ion-icon>
                </router-link>
              </ion-col>
              <ion-col class="col-3 d-flex flex-column justify-content-center">
                <ion-avatar class="avatar">
                  <img :src="siteImage"/>
                </ion-avatar>
              </ion-col>
              <ion-col class="col">
                <ion-label><h4>{{ siteTitle }}</h4></ion-label>
                <div class="info">
                  <strong>Address:</strong> {{ siteAddress }}
                </div>
                <div class="info mt-1">
                  <strong>Contact:</strong> {{ siteContact }}
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item class="col-12 map-box">
          <div id="map" class="mx-md-5 mt-md-5" :style="{ backgroundImage: 'url(' + siteImage + ')' }"></div>
        </ion-item>
      </ion-list>
      <ion-content class="content" padding>
        <ion-grid class="container">
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
              <ion-icon name="person"></ion-icon>
            </ion-col>
            <ion-col class="col-5 mr-0 pr-0">
              <ion-item>
                <input type="text" v-model="firstName" @change="saveData()" placeholder="First Name"/>
              </ion-item>
            </ion-col>
            <ion-col class="col-sm-1 m-0 p-0">
            </ion-col>
            <ion-col class="col-5 mx-0 pl-0">
              <ion-item>
                <input type="text" v-model="lastName" @change="saveData()" placeholder="Last Name"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
            </ion-col>
            <ion-col class="col">
              <ion-item>
                <input type="text" v-model="jobTitle" @change="saveData()" placeholder="Job Title"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
              <ion-icon name="call"></ion-icon>
            </ion-col>
            <ion-col class="col">
              <ion-item>
                <input type="text" v-model="phoneNumber" @change="saveData()" placeholder="Phone"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
              <ion-icon name="mail"></ion-icon>
            </ion-col>
            <ion-col class="col">
              <ion-item>
                <input type="email" v-model="email" @change="saveData()" placeholder="Email"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
              <ion-icon name="pin"></ion-icon>
            </ion-col>
            <ion-col class="col">
              <ion-item class="address">
                <input type="text" v-model="street" @change="saveData()" placeholder="Street"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
            </ion-col>
            <ion-col class="col">
              <ion-item class="address">
                <input type="text" v-model="city" @change="saveData()" placeholder="City"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
            </ion-col>
            <ion-col class="col">
              <ion-item class="address">
                <input type="text" v-model="state" @change="saveData()" placeholder="State"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
            </ion-col>
            <ion-col class="col">
              <ion-item class="address">
                <input type="text" v-model="country" @change="saveData()" placeholder="Country"/>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row">
            <ion-col class="col-1 pt-3">
            </ion-col>
            <ion-col class="col">
              <ion-item class="address">
                <input type="text" v-model="zipCode" @change="saveData()" placeholder="Zip Code"/>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SiteDetails',
  props: [
    'id',
    'image',
    'title',
    'address',
    'contact'
  ],
  data () {
    return {
      siteId: this.id,
      siteImage: this.image,
      siteTitle: this.title,
      siteAddress: this.address,
      siteContact: this.contact,
      contactId: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      phoneNumber: '',
      email: '',
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      site: {}
    }
  },
  mounted () {
    if (!this.id) {
      this.$router.push({ name: 'Sites' })
    }
    this.getData()
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'Sites' })
    },
    getData () {
      axios.get('http://localhost:3000/sites/' + this.id)
        .then(response => {
          // Get Site object
          this.site = response.data
          // Set default values
          this.contactId = response.data.contacts ? response.data.contacts.main.id : ''
          this.firstName = response.data.contacts ? response.data.contacts.main.firstName : ''
          this.lastName = response.data.contacts ? response.data.contacts.main.lastName : ''
          this.jobTitle = response.data.contacts ? response.data.contacts.main.jobTitle : ''
          this.phoneNumber = response.data.contacts ? response.data.contacts.main.phoneNumber : ''
          this.email = response.data.contacts ? response.data.contacts.main.email : ''
          this.street = response.data.contacts ? response.data.contacts.main.address.street : ''
          this.city = response.data.contacts ? response.data.contacts.main.address.city : ''
          this.state = response.data.contacts ? response.data.contacts.main.address.state : ''
          this.country = response.data.contacts ? response.data.contacts.main.address.country : ''
          this.zipCode = response.data.contacts ? response.data.contacts.main.address.zipCode : ''
        })
    },
    saveData () {
      if (!this.site.contacts) {
        this.site = {
          'contacts': {
            'main': {
              'id': '',
              'firstName': '',
              'lastName': '',
              'jobTitle': '',
              'phoneNumber': '',
              'email': '',
              'address': {
                'street': '',
                'city': '',
                'state': '',
                'country': '',
                'zipCode': ''
              }
            }
          }
        }
      }
      if (this.firstName.trim() !== '') {
        this.site.contacts.main.firstName = this.firstName
      }
      if (this.lastName.trim() !== '') {
        this.site.contacts.main.lastName = this.lastName
      }
      // this.siteContact = this.firstname + ' ' + this.lastname
      if (this.jobTitle.trim() !== '') {
        this.site.contacts.main.jobTitle = this.jobTitle
      }
      if (this.phoneNumber.trim() !== '') {
        this.site.contacts.main.phoneNumber = this.phoneNumber
      }
      if (this.email.trim() !== '') {
        this.site.contacts.main.email = this.email
      }
      if (this.street.trim() !== '') {
        this.site.contacts.main.address.street = this.street
      }
      if (this.city.trim() !== '') {
        this.site.contacts.main.address.city = this.city
      }
      if (this.state.trim() !== '') {
        this.site.contacts.main.address.state = this.state
      }
      if (this.country.trim() !== '') {
        this.site.contacts.main.address.country = this.country
      }
      if (this.zipCode.trim() !== '') {
        this.site.contacts.main.address.zipCode = this.zipCode
      }
      let url = 'http://localhost:3000/sites/' + this.id
      axios.put(url, this.site)
        .then(response => {
          this.getData()
        })
    }
  }
}
</script>

<style>
  .navBack {
    border-top: #333 solid 1px;
    top: 45px;
    height: 150px;
    background: #488aff;
  }
  .navBack ion-item:hover {
    background: blue;
    cursor: pointer;
  }
  .navBack .item-md {
    top: 10px;
  }
  .navBack .item-inner {
    border-bottom: 0 !important;
  }
  .navBack .info {
    color: #000;
  }
  .back {
    color: white;
  }
  svg {
    width: 1.75em;
    height: auto;
  }
  .map-box .item-inner {
    padding: 0 !important;
    border: 0 !important;
  }
  #map {
    width: 100%;
    height: 24vh;
    background-color: #aaa;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: #777 solid 2px;
    padding: 5px;
  }
  .pageDetails ion-scroll {
    margin-top: -15px !important;
    margin-bottom: 375px !important;
  }
  input {
    width: 100%;
    font-size: 0.67em;
    border: none;
  }
  ion-item.address {
    margin-top: -5px;
    margin-bottom: -5px;
    padding: 0;
  }
</style>
