<script lang="ts">

  let { label = '', name, placeholder = '', type = 'text', required = false, value = $bindable() } = $props();

</script>

<div class="flex bg-black/70 text-white relative">
	<label class="text-xl absolute top-6 left-6 sm:text-2xl" for={name}>{label}</label>
	<input type={type} name={name} placeholder={placeholder} required={required} bind:value={value} id={name} 
  class="text-2xl sm:text-3xl p-6 pt-18 w-full transition-all duration-300"/>
</div>

<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus,
  input:autofill,
  input:autofill:hover,
  input:autofill:active,
  input:autofill:focus {
    color: #fff;
    text-fill-color: #fff;
    -webkit-text-fill-color: #fff;
    background-color: #000;
    background-clip: text;
    -webkit-background-clip: text;
  }
</style>