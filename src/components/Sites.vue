<template>
  <ion-app>
    <ion-page class="show-page sitesPage">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>TrackTik Frontend Challenge</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item class="title" color="primary">
        <ion-grid>
          <ion-row class="row">
            <ion-col class="col-12 text-center">
              <h1>Sites</h1>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>
      <ion-content class="content container" padding>
        <ion-list class="row sitesList">
          <ion-item class="col-lg-6 col-xl-4" v-for="(site, index) of sites" :key="site.id" @click="getSiteDetails(site.id, image[index], title[index], address[index], contact[index])">
            <ion-grid>
              <ion-row class="row">
                <ion-col class="col-3 d-flex flex-column justify-content-center">
                  <ion-avatar class="avatar">
                    <img :src="image[index]" class="responsive"/>
                  </ion-avatar>
                </ion-col>
                <ion-col class="col-7">
                  <ion-label><h4>{{ title[index] }}</h4></ion-label>
                  <div class="info">
                    <strong>Address:</strong> {{ address[index] }}
                  </div>
                  <div class="info mt-1">
                    <strong>Contact:</strong> {{ contact[index] }}
                  </div>
                </ion-col>
                <ion-col class="col-1 d-flex flex-column justify-content-center">
                  <ion-icon name="arrow-forward"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
        </ion-list>
      </ion-content>
      <ion-footer>
        <h3 class="footer-title pt-2 my-0">Search & Display Options</h3>
        <ion-toolbar>
          <ion-list id="optionsPanel" class="row options mt-1">
            <!-- <ion-list-header class="order-0"><h3 class="text-center">Search & Display Options</h3></ion-list-header> -->
            <ion-item class="col-md-6 col-xl-3 order-1">
              <ion-label>Search:</ion-label>
              <input type="text" v-model="filter" @change="displaySites" placeholder="Enter search word"/>
            </ion-item>
            <ion-item class="col-md-6 col-xl-3 order-2 order-xl-3">
              <ion-label>Sort by:</ion-label>
              <select v-model="sortBy" @change="displaySites" placeholder="Select One">
                <option value="title">Site Name</option>
                <option value="contacts.main.firstName">First Name</option>
                <option value="contacts.main.lastName">Last Name</option>
                <option value="address.street">Street</option>
                <option value="address.city">City</option>
                <option value="address.state">State</option>
                <option value="updatedAt">Updated At</option>
                <option value="createdAt">Created At</option>
              </select>
            </ion-item>
            <ion-item class="col-md-6 col-xl-3 order-3 order-md-4">
              <ion-label>Order:</ion-label>
              <select v-model="order" @change="displaySites" placeholder="Select One">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </ion-item>
            <ion-item class="col-md-6 col-xl-3 order-4 order-md-3 order-xl-2">
              <ion-label>Items per page:</ion-label>
              <select v-model="itemsPerPage" @change="displaySites" placeholder="Select One">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="13">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
                <option value="60">60</option>
                <option value="72">72</option>
                <option value="84">84</option>
                <option value="96">96</option>
                <option value="108">108</option>
                <option value="120">120</option>
              </select>
            </ion-item>
            <ion-item class="col-12 pagination-box order-5">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <nav v-if="totalPages > 1" class="pagination" aria-label="Page navigation">
                      <ul class="d-flex justify-content-center">
                        <li v-if="currentPage > 1">
                          <button class="page-link" @click="firstPage" aria-label="First">
                            <span aria-hidden="true">&lt;&lt;</span>
                            <span class="sr-only">First</span>
                          </button>
                        </li>
                        <li v-if="currentPage > 2">
                          <button class="page-link" @click="previousPage" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                            <span class="sr-only">Previous</span>
                          </button>
                        </li>
                        <li class="page-item" v-for="page of pageRange" :key="page" @click="gotoPage(page)">
                          <button class="page-link page-click" :class="{ currentPage:page === currentPage }">{{ page }}</button>
                        </li>
                        <li v-if="totalPages > 2 && currentPage < totalPages - 1">
                          <button class="page-link" @click="nextPage" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                            <span class="sr-only">Next</span>
                          </button>
                        </li>
                        <li v-if="currentPage < totalPages">
                          <button class="page-link" @click="lastPage" aria-label="Last">
                            <span aria-hidden="true">&gt;&gt;</span>
                            <span class="sr-only">Last</span>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </ion-list>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </ion-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sites',
  data () {
    return {
      totalImages: [],
      image: [],
      totalTitles: [],
      title: [],
      totalAddresses: [],
      address: [],
      totalContacts: [],
      contact: [],
      filter: '',
      sortBy: '',
      order: '',
      currentPage: 1,
      itemsPerPage: 1,
      totalItems: 1,
      totalPages: 1,
      startPage: 1,
      endPage: 1,
      totalSites: [],
      sites: [],
      pageRange: []
    }
  },
  mounted () {
    // Load from localStorage or set default values
    if (localStorage.filter) {
      this.filter = localStorage.filter
    } else {
      this.filter = localStorage.filter = ''
    }
    if (localStorage.sortBy) {
      this.sortBy = localStorage.sortBy
    } else {
      this.sortBy = localStorage.sortBy = 'updatedAt'
    }
    if (localStorage.order) {
      this.order = localStorage.order
    } else {
      this.order = localStorage.order = 'desc'
    }
    if (localStorage.itemsPerPage) {
      this.itemsPerPage = parseInt(localStorage.itemsPerPage)
    } else {
      this.itemsPerPage = localStorage.itemsPerPage = 12
    }
    if (localStorage.currentPage) {
      this.currentPage = parseInt(localStorage.currentPage)
    } else {
      this.currentPage = localStorage.currentPage = 1
    }
    if (localStorage.totalSites && localStorage.totalSites === this.totalSites) {
      this.totalSites = localStorage.totalSites
    } else {
      this.displaySites()
    }
  },
  methods: {
    getSiteDetails (id, image, title, address, contact) {
      this.$router.push({ name: 'SiteDetails', params: { id, image, title, address, contact } })
    },
    displaySites () {
      let url = 'http://localhost:3000/sites?'
      // Filter
      if (this.filter !== '') {
        url += '&q=' + this.filter
      }
      // Sort
      if (this.sortBy === 'updatedAt' || this.sortBy === 'createdAt' || this.sortBy === 'title' || this.sortBy === 'contacts.main.firstName' || this.sortBy === 'contacts.main.lastName' || this.sortBy === 'address.street' || this.sortBy === 'address.city' || this.sortBy === 'address.state') {
        url += '&_sort=' + this.sortBy
      }
      // Order
      if (this.order === 'asc' || this.order === 'desc') {
        url += '&_order=' + this.order
      }
      // Query to backend
      axios.get(url)
        .then(res => {
          this.totalSites = localStorage.totalSites = res.data
          if (this.totalSites.length > 0) {
            this.setDefaultValues()
            this.paginate()
          }
        })
    },
    setDefaultValues () {
      this.totalSites.forEach((site, index) => {
        this.totalImages[index] = site.images && site.images[0].length > 0 ? site.images[0] : require('@/assets/default.png')
        this.totalTitles[index] = site.title ? site.title : 'NO SITE NAME'
        this.totalAddresses[index] = site.address && (site.address.street || site.address.city || site.address.state || site.address.country || site.address.zipCode)
          ? site.address.street + ', ' + site.address.city + ', ' + site.address.state + ', ' + site.address.country + ', ' + site.address.zipCode
          : 'NO ADDRESS'
        this.totalContacts[index] = site.contacts && site.contacts.main && (site.contacts.main.firstName || site.contacts.main.lastName)
          ? site.contacts.main.firstName + ' ' + site.contacts.main.lastName
          : 'NO CONTACT'
      })
    },
    paginate () {
      this.totalItems = this.totalSites.length
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
      if (this.currentPage > this.totalPages) {
        this.currentPage = localStorage.currentPage = 1
      }
      if (this.totalPages <= 10) {
        // Less than 10 total pages so show all
        this.startPage = 1
        this.endPage = this.totalPages
      } else {
        // More than 10 total pages so calculate start and end pages
        if (this.currentPage <= 6) {
          this.startPage = 1
          this.endPage = 10
        } else if (this.currentPage + 4 >= this.totalPages) {
          this.startPage = this.totalPages - 9
          this.endPage = this.totalPages
        } else {
          this.startPage = this.currentPage - 5
          this.endPage = this.currentPage + 4
        }
      }
      // Slice current page items from totalSites array
      let start = (parseInt(this.currentPage) - 1) * parseInt(this.itemsPerPage)
      let end = start + parseInt(this.itemsPerPage)
      this.sites = this.totalSites.slice(start, end)
      this.image = this.totalImages.slice(start, end)
      this.title = this.totalTitles.slice(start, end)
      this.address = this.totalAddresses.slice(start, end)
      this.contact = this.totalContacts.slice(start, end)
      // Calculate the displayed page range
      this.pageRange = []
      for (let i = this.startPage; i <= this.endPage; i++) {
        this.pageRange.push(i)
      }
    },
    firstPage () {
      if (this.currentPage > 1) {
        this.currentPage = localStorage.currentPage = 1
        this.paginate()
      }
    },
    previousPage () {
      if (this.currentPage > this.startPage) {
        this.currentPage = localStorage.currentPage = this.currentPage - 1
        this.paginate()
      }
    },
    gotoPage (pageNumber) {
      if (pageNumber >= this.startPage && pageNumber <= this.endPage) {
        this.currentPage = localStorage.currentPage = pageNumber
        this.paginate()
      }
    },
    nextPage () {
      if (this.currentPage < this.endPage) {
        this.currentPage = localStorage.currentPage = this.currentPage + 1
        this.paginate()
      }
    },
    lastPage () {
      if (this.currentPage < this.totalPages) {
        this.currentPage = localStorage.currentPage = this.totalPages
        this.paginate()
      }
    }
  },
  watch: {
    filter: (value) => {
      localStorage.filter = value
      this.currentPage = localStorage.currentPage = 1
    },
    sortBy: (value) => {
      localStorage.sortBy = value
      this.currentPage = localStorage.currentPage = 1
    },
    order: (value) => {
      localStorage.order = value
      this.currentPage = localStorage.currentPage = 1
    },
    itemsPerPage: (value) => {
      localStorage.itemsPerPage = value
      this.currentPage = localStorage.currentPage = 1
    }
  }
}
</script>

<style>
  .sitesPage ion-item.title {
    height: 97px;
    background: #488aff;
  }
  .sitesPage .title .item {
    top: 55px !important;
  }
  .sitesPage .title .item-ios {
    top: 45px !important;
    padding-left: 0;
  }
  .sitesPage .title .item-inner {
    border: 0;
  }
  .sitesPage ion-scroll {
    margin-top: 0 !important;
    margin-bottom: 340px !important;
  }
  @media (min-width: 768px) {
    .sitesPage ion-scroll {
      margin-bottom: 250px !important;
    }
  }
  @media (min-width: 1200px) {
    .sitesPage ion-scroll {
      margin-bottom: 205px !important;
    }
  }
  .sitesList ion-item:hover {
    cursor: pointer;
  }
  .sitesList .item {
    font-size: 80% !important;
    padding: 0;
  }
  .sitesList .label {
    margin: 5px 0;
  }
  .sitesList h4 {
    font-weight: 500;
  }
  .sitesList strong {
    font-weight: 500;
  }
  @media (max-width: 400px) {
    .sitesList .item {
      font-size: 67% !important;
    }
  }
  @media (max-width: 450px) {
    .sitesList .item {
      font-size: 75% !important;
    }
  }
  ion-avatar img {
    width: 36px !important;
    height: 36px !important;
  }
  @media (min-width: 350px) {
    ion-avatar img {
      width: 48px !important;
      height: 48px !important;
    }
  }
  @media (min-width: 400px) {
    ion-avatar img.responsive {
      width: 64px !important;
      height: 64px !important;
    }
  }
  @media (min-width: 450px) {
    ion-avatar img.responsive {
      width: 72px !important;
      height: 72px !important;
    }
  }
  @media (min-width: 1200px) {
    ion-avatar img.responsive {
      width: 56px !important;
      height: 56px !important;
    }
  }
  .options {
    margin-bottom: -10px;
  }
  .options ion-list-header {
    margin: 0;
  }
  .options .item-ios,
  .options .item-md {
    padding: 0;
  }
  .options ion-label,
  .options select {
    font-size: 0.8em;
    margin-left: 15px;
  }
  .pagination {
    margin: 0 auto;
    padding-top: 0.8em;
    font-size: 0.6em;
  }
  .pagination>ul {
    width: 100%;
    padding-inline-start: 0;
  }
  .pagination>ul>li {
    list-style-type: none;
  }
  .pagination>ul>li>.page-link.currentPage {
    background: #007bff;
    color: white;
  }
  .sitesList .avatar {
    width: 100%;
    height: auto;
  }
  .list-header-md {
    border: none;
  }
  .footer-title,
  .pagination-box .item {
    background: #f8f8f8;
  }
</style>
