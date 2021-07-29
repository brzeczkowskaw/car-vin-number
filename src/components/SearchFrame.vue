<template>
    <div class="search-frame">
        <div class="search-area">
            <Title class="title" text="Please enter your plate number" />
            <Input class="input" />
            <Button class="button" btnText="Send" />
        </div>
    </div>
</template>

<script>
import Title from './Title.vue';
import Input from './Input.vue';
import Button from './Button.vue';

export default {
  name: 'SearchFrame',
  components: {
      Title,
      Input,
      Button
  }
}
</script>

<style scoped>
    .search-frame {
        height: 80vh;
        width: 35vw;
        background: rgba(182, 198, 139, 0.7);
        border-radius: 50px;
    }

    .search-area {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr .5fr .5fr; 
        grid-template-areas: 
            "title"
            "input"
            "button";
        justify-items: center;
        }

    .title { 
        grid-area: title; 
        margin-top: 10%;
    }

    .input { 
        grid-area: input; 
    }

    .button { 
        grid-area: button; 
    }
</style>