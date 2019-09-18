<template>
<form>

<p>color</p>
<label>
  カラーパレッド：<input type="color" value="#">
</label>
<p>checkbox</p>

<p>date</p>
<p>datetime-local</p>
<p>email</p>
<p>file</p>
<p>hidden</p>
<p>radio</p>
<p>range</p>
<label>
    <input v-model="range" type="range" class="form-control" min="0" max="10">
</label>
<p>reset</p>
<p>password</p>
<input type="password" maxlength="8" placeholder="パスワード入力">
<p>serch</p>
<p>submit</p>
<p>tel</p>
<p>text</p>
<label>
    テキスト：<input type="text" name="text" value="未入力" placeholder="テキスト">
</label>
<p>url</p>



</form>
</template>
<script>
export default {
    data:{
        rage:3
    }
}
</script>
<style lang="sass" scoped>

</style>