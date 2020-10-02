
<template>
  <div class="container">
        <div class="card">
            <div class="card-body">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="item.email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" v-model="item.password"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  components: {
    //   name: 'AddItem'
  },
  data:function() { 
      return {
          item:{}
      }
  }, 
    

  methods: {
      login() {
        
           let uri = 'http://localhost/vue_php_crud/login.php';
            this.axios.post(uri,this.item).then((response) => {
                console.log("res",response.data);
                this.$router.push({name: 'Read'});

            });
        }
    } 

}
</script>
