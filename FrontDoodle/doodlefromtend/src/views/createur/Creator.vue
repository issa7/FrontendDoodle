<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header text-uppercase"><strong>Ajouter/Modifier - Createur</strong></div>
          <div class="card-body">
            <form class="form-horizontal" action="#">
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="hf-name">Nom <span class="text text-danger font-weight-bold">*</span></label>
                <div class="col-md-9">
                  <input class="form-control" id="hf-name" type="text" name="hf-name" placeholder="" v-model="fname" required>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="hf-pname">Prenom <span class="text text-danger font-weight-bold">*</span></label>
                <div class="col-md-9">
                  <input class="form-control" id="hf-pname" type="text" name="hf-pname" placeholder="" v-model="fpname" required>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="hf-email">Email <span class="text text-danger font-weight-bold">*</span></label>
                <div class="col-md-9">
                  <input class="form-control" id="hf-email" type="email" name="hf-email" placeholder="" v-model="femail" required>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="hf-Password">Password <span class="text text-danger font-weight-bold">*</span></label>
                <div class="col-md-9">
                  <input class="form-control" id="hf-Password" type="text" name="hf-Password" placeholder="" v-model="fpass" >
                </div>
              </div>
            </form>
            <br><div class="text-danger font-weight-bold" v-if="messageErrorEdit !== undefined">{{ messageErrorEdit }}</div>
          </div>
          <div class="card-footer">
            <div class="btn btn-sm btn-success" v-if="!isUpdate" @click.prevent="saveData()">Envoyer</div>
            <div class="btn btn-sm btn-warning" v-else @click.prevent="saveUpdateData()">Envoyer</div>
            <div class="btn btn-sm btn-danger" @click.prevent="clearInput()">Annuler</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header"><i class="fa fa-align-justify"/>Liste</div>
              <div class="card-body">
                <div class="text-danger font-weight-bold" v-if="messageErrorList !== undefined">{{ messageErrorList }}</div><br>

                <dataTable :t-columns="listTable.tabcolumns" :t-data="listData"
                           :t-use-action-buttons="listTable.tabUseActionButtons"
                           :t-action-buttons="listTable.tabActionButtons" t-action-column="mail"
                           @updateItem="updateData" @deleteItem="deleteData" @detailsItem="addSondage"/>
              </div>
            </div>
          </div>
          <!-- /.col-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'creator',
 data () {
      return {
        fname: '',
        fpname: '',
        femail: '',
        fpass:'',
        listData: [],
        isUpdate: false,
        itemUpdateCode: '',
        messageErrorList: undefined,
        messageErrorEdit: undefined,
        // Data table createur
        listTable: {
          tabcolumns: ['Mail', 'Nom', 'Prenom',],
          tabData: this.listData,
          tabButtonsName: {
            copy: 'Copier',
            print: 'Imprimer',
            colvis: 'Visibilté des colonnes'
          },
          tabUseActionButtons: true,
          tabActionButtons: {
            details: {
              name: 'creerSondage',
              bClass: 'btn btn-success btn-sm'
            },
            update: {
              name: 'Modifier',
              bClass: 'btn btn-sm btn-warning'
            },
            delete: {
              name: 'Supprimer',
              bClass: 'btn-danger btn-sm'
            }
          }
        }

      }
    },
    methods: {
      loadData () {
        this.$http.get('/rest/doodle/user/all').then((response) => {
          // this.listData = response.data.data
          // construction du tableau
          let responseData = response.data
          let table = []
          responseData.forEach(element => {
            let item = {}
            item.email = element.mail
            item.name = element.nom
            item.prenom = element.prenom
            table.push(item)
          })
          this.listData = table

          this.messageErrorList = undefined
        }, () => {
          this.messageErrorList = 'Une erreur est survenue lors du chargement de la liste'
        })
      },

      saveData () {
        if (this.fname !== '') {
          var formData = {
            mail: this.femail,
            nom: this.fname,
            prenom:this.fpname,
            motPass: this.fpass
          }

          this.$http.post('/rest/doodle/createur/',formData, ).then((response) => {
            // si les donnees ont bien ete creer, on ajoute les donnees à 'listData' puis on vide l'objet courant
            this.loadData()
            this.clearInput()
          }, ( response) => {
            console.log(console.log('errueru',response))
            console.log(formData)
            this.messageErrorEdit = 'Une erreur est survenue lors de l\'enregistrement'
          })
        }
      },

      clearInput () {
        this.fname = ''
        this.femail = '',
          this.fpname = '',
          this.fpass = '',
        this.isUpdate = false
        this.itemUpdateCode = ''
        this.messageErrorEdit = undefined
      },

      updateData (code) {
        this.$http.get('/api/createur/area_type/get/' + code).then((response) => {
          let responseData = response.data.data
          // this.fnumber = responseData.num_type_zone_geo
          this.fname = responseData.nom
          this.isUpdate = true
          this.itemUpdateCode = code // responseData.slug

          this.messageErrorEdit = undefined
        }, () => {
          this.messageErrorEdit = 'Une erreur est survenue lors du chargement des données'
        })
      },
      addSondage(mail) {
        this.$router.push('sondage/sondageDate/' + mail)
      },
      saveUpdateData () {
        if (this.fname !== '') {
          const formData = {
            name: this.fname,
            number: this.fnumber
          }

          this.$http.post('/api/createur/area_type/update/' + this.itemUpdateCode, formData, {emulateJSON: true}).then((response) => {
            this.loadData()
            this.clearInput()
          }, () => {
            this.messageErrorEdit = 'Une erreur est survenue lors de la modification'
          })
        }
      },

      deleteData (code) {
        // let code = this.itemUpdateCode
        this.$http.get('/api/createur/area_type/delete/' + code).then((response) => {
          this.loadData()
          this.messageErrorList = undefined
        }, () => {
          this.messageErrorList = 'Une erreur est survenue lors de la suppression'
        })
      },

      selectEditData (code) {
        this.itemUpdateCode = code
      }
    },
    mounted () {
      this.loadData()
      // eslint-disable-next-line no-undef
      $(document).ready(function () {
        // eslint-disable-next-line no-undef

      })
    }
  }
</script>

<style >
  /**/ @import '../../../node_modules/select2/dist/css/select2.min.css';
</style>
