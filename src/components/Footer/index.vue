<template>
  <div>
    <footer class="comment-footer">
  
    <div class="comment-footer-about">
        <div class="row">
            <div>
                <p class="comment-footer-app">驾考管理平台</p>
            </div>
        </div>
    </div>
</footer>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
.comment-footer {
    width: 100%;
    overflow: hidden;
    min-width: 1230px
}

.comment-footer .comment-footer-about {
    text-align: center;
    background-color: #F2F2F2;
    padding: 15px 0
}

.comment-footer .comment-footer-about .row {
    padding: 5px 0
}

.comment-footer .comment-footer-app {
    padding-top: 10px;
    font-size: 14px;
    color: #999;
    line-height: 16px
}
</style>