<template>

    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">WaterGate - All drops matter</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Grundfos official site</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown text="Language" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown text="Profile" right>
                            <b-dropdown-item href="#">Account settings</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

    <div class="container-fluid text-center">

        <div class="row content">

            <div class="col-sm-8 text-left" id="dropdown_users">
                <h1>Graph</h1>


                <div class="row justify-content-center">
                    <div class="col-sm-2 text-left">
                        <b-form-select v-model="users" :options="userOptions" size="sm" class="mt-3"></b-form-select>
                    </div>

                    <div class="col-sm-6 text-center">
                        <b-form-group>
                            <b-form-radio-group v-model="waterTemp" :options="waterOptions" name="radio-inline"></b-form-radio-group>
                        </b-form-group>
                    </div>
                </div>

                    <hr>
                    <h3>Stats</h3>
                    <p></p>
                    <p>Water used in x day by is</p>
                    <p>Total cost of water used in x day is</p>
                </div>

                <div class="col-sm-4 sidenav">
                    <div class="well">
                        <p>Time settings</p>
                    </div>
                    <div class="well">
                        <p>Notifications</p>
                    </div>
                </div>

            </div>

    </div>

    <footer class="container-fluid text-center">
        <p>Grundfos</p>
    </footer>
    </div>
</template>

<script>

    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue)

    export default {
        data() {
            return {
                users: 'a',
                userOptions: [
                    { value: 'a', text: 'All users' },
                    { value: 'b', text: 'User1' },
                    { value: 'c', text: 'User2' },
                ],

            waterTemp: 'a',
                waterOptions: [
                    { value: 'a', text: 'All water' },
                    { value: 'b', text: 'Hot water' },
                    { value: 'c', text: 'Cold water' },
                ]
            }
        }
    }

</script>

<style>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    #app{

    }

</style>
