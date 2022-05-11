<template>
    <div class="flex justify-center items-center space-x-4">
        <span
            class="text-xl"
        >
            Califica tu experiencia
        </span>
        
        <div class="rate flex flex-row-reverse justify-center items-center">
            <input type="radio" id="star1" name="rate" value="1" />
            <label class="md:w-7" for="star1">1 star</label>
    
            <input type="radio" id="star2" name="rate" value="2" />
            <label class="md:w-7" for="star2">2 stars</label>
    
            <input type="radio" id="star3" name="rate" value="3" />
            <label class="md:w-7" for="star3">3 stars</label>
    
            <input type="radio" id="star4" name="rate" value="4" />
            <label class="md:w-7" for="star4">4 stars</label>
    
            <input type="radio" id="star5" name="rate" value="5" />
            <label class="md:w-7" for="star5">5 star</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "RateExperience",
}
</script>

<style scoped>
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    /*width:.85em;*/
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:34px;
    color:#d1b6bd;
}
.rate:not(:checked) > label:before {
    content: '+ ';
}
.rate > input:checked ~ label {
    color: #FFF8E8;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #FFF8E8;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #FFF8E8;
}
</style>