<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Home Component</div>

                    <div class="card-body">
                       Home
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeComponent",
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
