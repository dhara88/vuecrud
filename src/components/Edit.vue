<template>
   <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>ID:</label>
                        <input type="text" class="form-control" v-model="empData.id" />
                    </div>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="empData.name" />
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" class="form-control" v-model="empData.email"  />
                    </div>
                    <div class="form-group">
                        <label>Age:</label>
                        <input type="text" class="form-control" v-model="empData.age" />
                    </div>
                    <div class="form-group">
                        <label>Designation:</label>
                        <input type="text" class="form-control" v-model="empData.designation"  />
                    </div>
                    <div class="form-group">
                        <label>Created:</label>
                        <input type="text" class="form-control" v-model="empData.created" />
                    </div>
                    <div class="form-group">
                        <input type="submit" @click="updateItem()" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */

export default{
        data(){
            return{
                empData:[],
                

            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
            //  console.log("rout id",this.$route.params.id);
             let uri = 'http://localhost/vue_php_crud/api/single_read.php/?id=' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.empData = response.data;
                });
            },

            updateItem() 
            {
                const options = {
                    "id":this.$route.params.id,
                    "name":this.empData.name,
                    "email":this.empData.email,
                    "age":this.empData.age,
                    "designation":this.empData.designation,
                    "created":this.empData.created
                }
              let uri = 'http://localhost/vue_php_crud/api/update.php';
                this.axios.post(uri,options).then((response) => {
                    console.log("res update",response)
                  this.$router.push({name: 'Read'});
                });
            }
        }
    }
</script>