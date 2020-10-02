
<template>
  <div class="container">
       <div style="margin-bottom:30px">
                <button class="btn btn-primary"  @click="$router.push({name: 'Create'})">Add Item</button>

            </div>
        <div class="card">
           
            <div class="card-header">
                <h3>ShowI List</h3>
            </div>
            <div class="card-body">

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Created</th>

                        </tr>
                    </thead>
                    <tbody> 
                        <tr  v-for="(user,index) in users" v-bind:key="index">
                        <th scope="row"></th>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.designation}}</td>
                        <td>{{user.created}}</td>
                        <td><router-link :to="{name: 'Edit', params: { id: user.id }}" class="btn btn-primary">Edit</router-link></td>
                        <td><button class="btn btn-danger"  v-on:click="deleteItem(user.id)">Delete</button></td>
                        </tr>
                  </tbody> 
                    </table> 
            </div>
        </div>
    </div>
</template>


<script>
/* eslint-disable vue/no-unused-components */
export default 

{
  components: { 
      name: 'AddItem'
  }, 
  data:function() { 

      return {
          users: []
      }
  }, 
    mounted: function () { 
    this.addItem();
  },

  methods: {
      addItem() {
           let uri = 'http://localhost/vue_php_crud/api/read.php';
            this.axios.get(uri).then((response) => { 
                console.log("res",response.data)
                this.users = response.data;
            });
        },

        
         deleteItem(id)
            {
              let uri = 'http://localhost/vue_php_crud/api/delete.php';
             this.axios.delete(uri,{data:{"id":id}}).then((response) => {
             console.log("delete res",response)
                
            });
            }
    }
}
</script>
