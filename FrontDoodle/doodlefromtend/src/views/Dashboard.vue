<template>
<div>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header"><i class="fa fa-align-justify"/>Liste des sondage </div>
            <div class="card-body">


              <dataTable :t-columns="listTable.tabcolumns" :t-data="listData"
                         :t-use-action-buttons="listTable.tabUseActionButtons"
                         :t-action-buttons="listTable.tabActionButtons" t-action-column="id"
                         @updateItem="ListParticipant"  />
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

export default {
  name: 'Dashboard',

  data () {
    return {

      listData: [],
      isUpdate: false,
      itemUpdateCode: '',
      messageErrorList: undefined,
      messageErrorEdit: undefined,
      // Data table createur
      listTable: {
        tabcolumns: ['Nom Sondage', 'createur', 'Reunion',],
        tabData: this.listData,
        tabButtonsName: {
          copy: 'Copier',
          print: 'Imprimer',
          colvis: 'Visibilté des colonnes'
        },
        tabUseActionButtons: true,
        tabActionButtons: {

          update: {
            name: 'Liste des participants',
            bClass: 'btn btn-sm btn-warning'
          },
        }
      }

    }
  },

  methods: {
    loadData () {
      this.$http.get('/rest/doodle/sondageDate/all').then((response) => {
        let responseData = response.data
        let table = []
        responseData.forEach(element => {
          let item = {}
          item.nom = element.nomSondage
          item.creatur = element.utilisateur.mail
          item.rencontre = element.reunion
          item.id = element.id
          table.push(item)
        })
        this.listData = table
         console.log(responseData)
      }, (response) => {
        console.log()
      })
    },
    ListParticipant (code) {
      this.$router.push('/listParticipant/' + code)
    },
    deleteData (code) {

    },
  },
  mounted () {

    this.loadData()
    // Mise à jour

  }
}
</script>

<style scoped>

</style>
