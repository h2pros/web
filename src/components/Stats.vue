<template>
    <div>
        <h3>Cost</h3>
        <p>Cost to User 1: £{{ costUser1 }}</p>
        <p>Cost to User 2: £{{ costUser2 }}</p>
        <p>Total cost: £{{ costTotal }}</p>
    </div>
</template>

<script>
import { getCost } from '../js/dataGetter'

export default {
    name: 'Stats',
    props: {
        timescale: {
            default: 'day'
        }
    },
    data() {
        return {
            costUser1: '',
            costUser2: '',
            costTotal: ''
        }
    },
    watch: {
        timescale: function(newVar, oldVar){
            var [test1, test2, testtotal] = getCost(this.timescale)
            this.costUser1 = test1, this.costUser2 = test2, this.costTotal = testtotal;
        }   
    }
}
</script>