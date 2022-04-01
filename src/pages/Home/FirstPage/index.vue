<template>
    <div>
            <Bananer></Bananer>
        <SubjectOption></SubjectOption>
        <LearnFollow></LearnFollow>
    </div>

</template>

<script>
import SubjectOption from '@/components/SubjectOption'
import LearnFollow from '@/components/LearnFollow'
import Bananer from '@/components/Bananer'
export default {
    name:'FirstPage',
    components:{
      SubjectOption,
      LearnFollow,
      Bananer
    }
}
</script>

<style>

</style>