<script lang="ts">

  let { label = '', name = '', placeholder = '', type = 'text', required = false, value = $bindable() } = $props();

</script>

<div class="flex bg-black/70 text-white relative">
	<label class="text-2xl absolute top-6 left-6" for={name}>{label}</label>
	<input type={type} name={name} placeholder={placeholder} required={required}  class="text-3xl p-6 pt-18 w-full"/>
</div>