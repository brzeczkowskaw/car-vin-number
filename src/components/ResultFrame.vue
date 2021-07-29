<template>
    <div class="result-frame">
        <div class="result-area">
            <NameText text="Trade name" />
            <ResultText text="hello" />
            <NameText text="Date of first admission" />
            <ResultText text="hello" />
            <NameText text="Fuel description" />
            <ResultText text="hello" />
        </div>
    </div>
</template>

<script>
import NameText from './NameText.vue';
import ResultText from './ResultText.vue';

export default {
  name: 'ResultFrame',
  components: {
      NameText,
      ResultText
  }
}
</script>

<style scoped>
    .result-frame {
        height: 80vh;
        width: 35vw;
        background: rgba(182, 198, 139, 0.7);
        border-radius: 50px;
    }

    .result-area {
        height: 100%;
        display: grid;
        text-align: center;
        justify-items: center;
    }

</style>