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
                <!-- <h1>Graph</h1> -->
                <!-- <img src="graph.jpg" alt="Missing graph" style="width:50%;   display: block; margin-left: auto;  margin-right: auto;"> -->
                <line-chart-container :temp="waterTemp"/>

                <div class="row justify-content-center my-auto">
                    <div class="col-sm-2 text-left">
                        <b-form-select v-model="users" :options="userOptions" size="sm" class="mt-3"></b-form-select>
                    </div>

                    <div class="col-sm-6 text-center my-auto">
                        <b-form-group>
                            <b-form-radio-group v-on:change="changeTemp" v-model="waterTemp" :options="waterOptions" name="radio-inline"></b-form-radio-group>
                        </b-form-group>
                    </div>
                </div>

                <hr>
                <h3>Stats</h3>
                <p></p>
                <p>Water used in x day by x is x</p>
                <p>Total cost of water used in x day is x</p>
                <!-- <p>This text field exists only because the footer hides the last one and it's easier just to create this than to try to fix that xd</p> -->
            </div>

            <div class="col-sm-4 sidenav">
                <div class="well">
                    <p></p>
                    <p>Time settings</p>
                    <p></p>
                    <div class="text-center">
                        <b-button-group>
                            <b-button variant="outline-primary">Day</b-button>
                            <b-button variant="outline-primary">Week</b-button>
                            <b-button variant="outline-primary">Month</b-button>
                        </b-button-group>
                    </div>
                    <!-- <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col-sm-4 text-center">
                        </div>
                        <div class="col-sm-4 text-center">
                            <b-form-input v-model="text" placeholder="Enter the date"></b-form-input>
                        </div>
                    </div> -->
                    <p></p>
                </div>
                <hr>
                <div class="well">
                    <p>Notifications</p>
                </div>
            </div>

            </div>

    </div>

    <footer class="container-fluid text-center" style="    clear: both;    position: absolute;    height: 40px;    margin-top: -40px;    background-color:aquamarine">
        <p>Grundfos</p>
    </footer>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import LineChartContainer from './components/ChartContainer.vue'

    export default {
        name: 'app',
        components: {
            LineChartContainer
        },
    
        data() {
            return {
                temp: 'all',
                users: 'a',
                userOptions: [
                    { value: 'a', text: 'All users' },
                    { value: 'b', text: 'User1' },
                    { value: 'c', text: 'User2' },
                ],

                waterTemp: 'all',
                waterOptions: [
                    { value: 'all', text: 'All water' },
                    { value: 'hot', text: 'Hot water' },
                    { value: 'cold', text: 'Cold water' },
                ]
            }
        },
    }

</script>

<style>

    #app{

    }

</style>
