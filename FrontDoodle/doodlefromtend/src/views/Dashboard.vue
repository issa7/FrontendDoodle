<template>

</template>

<script>

export default {
  name: 'Dashboard',

  data () {
    return {
      tabcolumns: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
      tabData: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          startDate: '2011/04/25',
          salary: '$320,800',
          slug: 'jedoffgd'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          startDate: '2011/07/25',
          salary: '$170,750',
          slug: 'dolepe'
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          startDate: '2009/01/12',
          salary: '$86,000',
          slug: 'erpzefnc'
        },
        {
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '22',
          startDate: '2012/03/29',
          salary: '$433,060',
          slug: 'ndksudq'
        },
        {
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '33',
          startDate: '2008/11/28',
          salary: '$162,700',
          slug: 'qeozqdnf'
        },
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          startDate: '2011/04/25',
          salary: '$320,800',
          slug: 'ùqsjifc'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          startDate: '2011/07/25',
          salary: '$170,750',
          slug: 'anxsodix'
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          startDate: '2009/01/12',
          salary: '$86,000',
          slug: 'posdcndsc'
        },
        {
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '22',
          startDate: '2012/03/29',
          salary: '$433,060',
          slug: 'msdosfc'
        },
        {
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '33',
          startDate: '2008/11/28',
          salary: '$162,700',
          slug: 'pofdjqsfcn'
        }
      ],
      tabButtons: ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis'],
      tabButtonsName: {
        copy: 'Copier',
        print: 'Imprimer',
        colvis: 'Visibilté des colonnes'
      },
      tabUseActionButtons: true,
      tabActionButtons: {
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
  },

  methods: {
    updateItem (param) {
      console.log(param)
    },

    deleteItem (param) {
      console.log(param)
    }
  }
}
</script>

<style scoped>

</style>
